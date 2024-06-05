import { json, error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

type DescriptionsCacheType = Record<number, string>;

let descriptionsCache: DescriptionsCacheType | null = null;

async function loadDescriptions(): Promise<DescriptionsCacheType | null> {
    if (descriptionsCache) {
        return descriptionsCache;
    }

    const descriptionsFilePath = path.resolve('static/data', 'descriptions.json');

    return new Promise((resolve, reject) => {
        fs.readFile(descriptionsFilePath, 'utf8', (err, fileContent) => {
            if (err) {
                console.error('Error reading descriptions file:', err);
                reject(error(500, 'Error fetching moment text'));
            } else {
                descriptionsCache = JSON.parse(fileContent);
                resolve(descriptionsCache);
            }
        });
    });
}

export async function GET({ params }) {
    const { id } = params;

    try {
        const descriptions = await loadDescriptions();

        if (!descriptions) {
            throw error(500, 'Descriptions cache is empty');
        }

        const description = descriptions[Number(id)];

        if (!description) {
            throw error(404, 'Description not found');
        }

        return json({ short_id: id, description });
    } catch (err) {
        console.error('Error fetching moment text:', err);
        throw error(500, 'Error fetching moment text');
    }
}
