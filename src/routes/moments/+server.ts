import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/clients/supabaseClient";

const roundCoordinates = (coordinates: [number, number]): [number, number] => {
	return coordinates.map(coord => parseFloat(coord.toFixed(6))) as [number, number];
};

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
		features: data.map((moment) => {
			return {
				type: "Feature",
				id: moment.short_id,
				geometry: {
					type: "Point",
					coordinates: roundCoordinates(moment.location.coordinates),
				}
			};
		}),
	};

	return json(geoJson);
}

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
