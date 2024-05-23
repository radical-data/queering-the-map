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

	fs.writeFileSync(path.resolve(outputDir, 'moments.json'), JSON.stringify(geoJson));
}

export async function fetchAndWriteData() {
	const geoJson = await fetchData();

	if (!geoJson) {
		console.error('Failed to fetch data, aborting file write.');
		return;
	}

	writeDataToFile(geoJson);
}