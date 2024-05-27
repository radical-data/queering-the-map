import { supabase } from '../clients/supabaseClient';
import fs from 'fs';
import path from 'path';

export async function fetchData() {
	const { data, error } = await supabase
		.from('moments')
		.select('short_id, location')
		.eq('status', 'approved');

	if (error) {
		console.error('Error fetching moments:', error);
		return null;
	}

	const geoJson = {
		type: 'FeatureCollection',
		features: data.map((moment) => ({
			type: 'Feature',
			id: moment.short_id,
			geometry: moment.location,
		})),
	};

	return geoJson;
}

export function writeDataToFile(geoJson) {
	const outputDir = path.resolve('static');
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	const filePath = path.resolve(outputDir, 'moments.json');
	fs.writeFileSync(filePath, JSON.stringify(geoJson));

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
