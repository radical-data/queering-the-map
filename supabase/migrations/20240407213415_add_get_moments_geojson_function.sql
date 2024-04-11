CREATE OR REPLACE FUNCTION public.get_moments_geojson()
RETURNS JSON AS $$
BEGIN
    RETURN (
        SELECT COALESCE(json_build_object(
            'type', 'FeatureCollection',
            'features', json_agg(
                json_build_object(
                    'type', 'Feature',
                    'id', short_id,
                    'geometry', ST_AsGeoJSON(location)::json
                )
            )
        ), json_build_object(
            'type', 'FeatureCollection',
            'features', json_build_array()
        ))
        FROM public.moments
        WHERE moments.status = 'approved'
    );
END;
$$ LANGUAGE plpgsql STABLE;
