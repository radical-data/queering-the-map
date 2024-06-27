import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import type { FeatureCollection, Feature, Point } from 'geojson';
import { roundCoordinates } from '$lib/utils/utils';

function getRandomCoordinate(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateRandomMoment(id: number): Feature<Point> {
  const longitude = getRandomCoordinate(-180, 180);
  const latitude = getRandomCoordinate(-90, 90);

  const point: Point = {
    type: 'Point',
    coordinates: roundCoordinates([longitude, latitude], 6)
  };

  const feature: Feature<Point> = {
    type: 'Feature',
    id: id,
    geometry: point,
    properties: {} // Empty properties to satisfy the GeoJSON type
  };

  return feature;
}

function generateRandomMoments(count: number): FeatureCollection<Point> {
  const features: Feature<Point>[] = [];

  for (let i = 1; i <= count; i++) {
    features.push(generateRandomMoment(i));
  }

  return {
    type: 'FeatureCollection',
    features: features
  };
}

function saveMomentsToFile(count: number, filePath: string): void {
  const moments = generateRandomMoments(count);

  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  // Remove empty properties from each feature
  const simplifiedMoments = {
    ...moments,
    features: moments.features.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ properties, ...rest }) => rest
    )
  };

  writeFileSync(filePath, JSON.stringify(simplifiedMoments));
  console.log(`Generated ${count} moments and saved to ${filePath}`);
}

function parseArguments(args: string[]): Record<string, string> {
  const result: Record<string, string> = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace('--', '');
    const value = args[i + 1];
    result[key] = value;
  }
  return result;
}

const DEFAULT_NUMBER_OF_MOMENTS = 99999;

const args = process.argv.slice(2);
const parsedArgs = parseArguments(args);

let numberOfMoments = parseInt(parsedArgs['number-of-features'], 10);

if (isNaN(numberOfMoments) || numberOfMoments <= 0) {
  numberOfMoments = DEFAULT_NUMBER_OF_MOMENTS;
}

const rootPath = process.cwd();
const filePath = join(rootPath, 'static/data', 'moments.json');

saveMomentsToFile(numberOfMoments, filePath);
