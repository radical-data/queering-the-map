import { json, error } from '@sveltejs/kit';
import { supabase } from '$lib/clients/supabaseClient'

export async function GET({ params }) {
    const { id } = params;
    const { data, error: fetchError } = await supabase.from('moments').select('description').eq('short_id', parseInt(id, 10)).single()

    if (fetchError) {
        error(500, 'Error fetching moment text')
    }

    return json(data);
}
