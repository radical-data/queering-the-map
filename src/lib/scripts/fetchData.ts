import { supabase } from '../clients/supabaseClient';
import fs from 'fs';
import path from 'path';
import type { GeoJSON } from 'geojson';
import { roundCoordinates } from '$lib/utils/utils';

export async function fetchData(): Promise<GeoJSON | null> {
	const { data, error } = await supabase
		.from('moments')
		.select('short_id, location')
		.eq('status', 'approved');

	if (error) {
		console.error('Error fetching moments:', error);
		return null;
	}

	const geoJson: GeoJSON = {
		type: "FeatureCollection",
		features: data.map((moment) => ({
			type: "Feature",
			id: moment.short_id,
			geometry: {
				type: "Point",
				coordinates: roundCoordinates(moment.location.coordinates, 6),
			},
			properties: {} // Include properties to match GeoJSON structure
		})),
	};

	return geoJson;
}

export function writeDataToFile(geoJson: GeoJSON): string {
	const outputDir = path.resolve('static');
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Remove "properties" before saving as it is empty
	const simplifiedGeoJson = {
		...geoJson,
		features: geoJson.features.map(({ properties, ...rest }) => rest)
	};

	const filePath = path.resolve(outputDir, 'moments.json');
	fs.writeFileSync(filePath, JSON.stringify(simplifiedGeoJson));

	return filePath;
}

export async function fetchAndWriteData() {
	const geoJson = await fetchData();

	if (!geoJson) {
		console.error('Failed to fetch data, aborting file write.');
		process.exit(1);
	}

	const filePath = writeDataToFile(geoJson);
	console.log(`Fetched ${geoJson.features.length} moments and saved to ${filePath}`);
}

fetchAndWriteData().catch(err => {
	console.error('Error in fetchAndWriteData:', err);
	process.exit(1);
});
