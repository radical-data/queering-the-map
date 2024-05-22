import { json } from '@sveltejs/kit';
import { supabase } from '$lib/clients/supabaseClient'

export async function GET() {
    const { data, error } = await supabase
        .from('moments')
        .select('short_id, location')
        .eq('status', 'approved');

    if (error) {
        console.error('Error fetching moments:', error);
        return json({ error: 'Error fetching moments' }, { status: 500 });
    }

    const geoJson = {
        type: 'FeatureCollection',
        features: data.map(moment => ({
            type: 'Feature',
            id: moment.short_id,
            geometry: moment.location
        }))
    };

    return json(geoJson);
}
