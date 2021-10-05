import path from "path";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), 'public/gallery')

export function getImages() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.jpg$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        console.log(fullPath)
        // Combine the data with the id
        return {
            id: id, fileName: fileName
        }
    })
}