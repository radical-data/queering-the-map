import { json } from '@sveltejs/kit';
import {supabase}  from '$lib/clients/supabaseClient'

export async function GET() {
    const { data, error } = await supabase.rpc('get_moments_geojson');

    if (error) {
        console.error('Error fetching moments:', error);
        return;
    }

    return json(data);
}
