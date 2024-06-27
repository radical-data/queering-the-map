export const roundCoordinates = (
  coordinates: [number, number],
  decimal_points = 6
): [number, number] => {
  return coordinates.map((coord) =>
    parseFloat(coord.toFixed(decimal_points))
  ) as [number, number];
};
