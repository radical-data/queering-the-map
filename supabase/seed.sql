DO $$
DECLARE
  i INT;
  randStatus TEXT;
  randLang CHAR(2);
  randDescription TEXT;
  randLocation GEOMETRY;
  lon FLOAT;
  lat FLOAT;
BEGIN
  FOR i IN 1..99999 LOOP
    randStatus := 'approved';
    randLang := 'en';
    randDescription := 'Description ' || i || ' ' || md5(random()::text);
    
    -- Generate random longitude and latitude within valid ranges
    lon := (random() * 360) - 180; -- Longitude between -180 and 180
    lat := (random() * 180) - 90;  -- Latitude between -90 and 90

    -- Random location with SRID=4326
    randLocation := ST_SetSRID(ST_MakePoint(lon, lat), 4326);
    
    INSERT INTO public.moments (description, status, language, location)
    VALUES (randDescription, randStatus, randLang, randLocation);
  END LOOP;
END$$;
