/**
 * Chunks an array into chunks of a specified size.
 * @param array - The array to chunk.
 * @param chunkSize - The number of items per chunk.
 * @returns An array of arrays, each representing a chunk.
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    if (chunkSize <= 0) return [];
    
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}