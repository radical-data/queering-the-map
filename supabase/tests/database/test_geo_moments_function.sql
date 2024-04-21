begin;

select plan(2);

select function_returns( 'get_moments_geojson', 'json');

truncate table public.moments cascade;
insert into public.moments (short_id, location, status) values
  (1, ST_GeomFromText('POINT(30 10)'), 'approved'),
  (2, ST_GeomFromText('POINT(10 30)'), 'approved'),
  (3, ST_GeomFromText('POINT(40 40)'), 'rejected'); -- this will not be selected

select is(
    get_moments_geojson()::jsonb, 
    '{"type": "FeatureCollection", "features": [
    {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [30, 10]}},
    {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [10, 30]}}
    ]}'::jsonb,
    'Test if get_moments_geojson returns correct result'
);

select * from finish();

rollback;
