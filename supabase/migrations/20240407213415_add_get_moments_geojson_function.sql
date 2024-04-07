CREATE OR REPLACE FUNCTION public.get_moments_geojson()
RETURNS JSON AS $$
BEGIN
    RETURN (
        SELECT json_build_object(
            'type', 'FeatureCollection',
            'features', json_agg(
                json_build_object(
                    'type', 'Feature',
                    'id', short_id,
                    'geometry', ST_AsGeoJSON(location)::json
                )
            )
        )
        FROM public.moments
    );
END;
$$ LANGUAGE plpgsql STABLE;
