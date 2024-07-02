import { fetchFiles } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
    const allFiles = await fetchFiles();
    console.log(allFiles)
    const sortedFiles = allFiles
    return json(sortedFiles);
};