import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/clients/supabaseClient";

export const POST: RequestHandler = async ({ request }) => {
	const { lng, lat, description } = await request.json();

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
