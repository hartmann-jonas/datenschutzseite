export const fetchFiles = async () => {
    const allSourceFiles = import.meta.glob("/src/lib/files/*.pdf");
    const iterableFiles = Object.entries(allSourceFiles);
 
    const allFiles = await Promise.all(
      iterableFiles.map(async ([path, resolver]) => {
        /* remove the path part and the end part */
        const id = path.slice("/src/lib/files/".length, ".pdf".length * -1);
        const filePath = `${id}`;
        return {
          path: filePath,
        };
      })
    );
 
    return allFiles;
  };