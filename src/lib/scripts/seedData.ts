import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import type { FeatureCollection, Feature, Point } from 'geojson';
import { roundCoordinates } from '$lib/utils/utils';

function getRandomCoordinate(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function generateRandomWord(): string {
  return (Math.random() + 1).toString(36).substring(9);
}

function generateRandomDescription(id: number): string {
  const numWords = Math.floor(Math.random() * 16) + 2;
  const words = [];
  for (let i = 0; i < numWords; i++) {
    words.push(generateRandomWord());
  }
  return `Description ${id} ${words.join(' ')}`;
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

function generateAndSaveMoments(count: number, filePath: string): void {
  const features: Feature<Point>[] = [];

  for (let i = 1; i <= count; i++) {
    features.push(generateRandomMoment(i));
  }

  const moments: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: features
  };

  // Remove empty properties from each feature
  const simplifiedMoments = {
    ...moments,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    features: moments.features.map(({ properties, ...rest }) => rest)
  };

  saveToFile(simplifiedMoments, filePath);
}

function generateAndSaveDescriptions(count: number, filePath: string): void {
  const descriptions: Record<number, string> = {};

  for (let i = 1; i <= count; i++) {
    descriptions[i] = generateRandomDescription(i);
  }

  saveToFile(descriptions, filePath);
}

function saveToFile<T>(data: T, filePath: string): void {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  writeFileSync(filePath, JSON.stringify(data));
  console.log(`Saved data to ${filePath}`);
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
const momentsFilePath = join(rootPath, 'static/data', 'moments.json');
const descriptionsFilePath = join(rootPath, 'static/data', 'descriptions.json');

generateAndSaveMoments(numberOfMoments, momentsFilePath);
generateAndSaveDescriptions(numberOfMoments, descriptionsFilePath);
