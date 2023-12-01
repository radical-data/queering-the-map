import { getMomentText } from '$lib/getMomentText';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const { id } = params;
	const text = await getMomentText(parseInt(id, 10));
	return json(text);
}
