import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/clients/supabaseClient";

export async function GET() {
	const { data, error } = await supabase
		.from("moments")
		.select("short_id, location")
		.eq("status", "approved");

	if (error) {
		console.error("Error fetching moments:", error);
		return json({ error: "Error fetching moments" }, { status: 500 });
	}

	const geoJson = {
		type: "FeatureCollection",
		features: data.map((moment) => ({
			type: "Feature",
			id: moment.short_id,
			geometry: moment.location,
		})),
	};

	return json(geoJson);
}

export const POST: RequestHandler = async ({ request }) => {
	const { lng, lat, description, captchaToken } = await request.json();

	if (!captchaToken) {
		return json({ error: "CAPTCHA token is missing." }, { status: 400 });
	}

	const captchaVerifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const captchaSecret = process.env.PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

	const verifyResponse = await fetch(captchaVerifyUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			secret: captchaSecret,
			response: captchaToken
		})
	});

	const captchaResult = await verifyResponse.json();

	if (!captchaResult.success) {
		return json({ error: "CAPTCHA verification failed." }, { status: 400 });
	}

	const { error } = await supabase
		.from("moments")
		.insert([
			{
				description,
				location: `SRID=4326;POINT(${lng} ${lat})`,
				status: "pending",
			},
		])
		.select();

	if (error) {
		return json({ error: "Error saving new moment" }, { status: 500 });
	}

	return json({}, { status: 201 });
};
