import idDescriptionPairs from "$lib/data/id_description_pairs.json";

interface MomentPair {
  id: number;
  description: string;
}

export function getMomentText(id: number): string {
  const pairs: MomentPair[] = idDescriptionPairs as MomentPair[];
  const momentPair: MomentPair | undefined = pairs.find(
    (pair: MomentPair) => pair.id === id
  );

  return momentPair ? momentPair.description : "Description not found";
}