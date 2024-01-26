export function chunkArray<T>(array: T[], perChunk = 2): T[][] {
  console.log({ array, perChunk })
  const chunks: T[][] = []
	const n = array.length

	let i = 0

  while (i < n) {
    chunks.push(array.slice(i, i += perChunk))
  }

	return chunks
}
