/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch('/api/files');
  if (!response.ok) {
      throw new Error(`Error fetching files: ${response.statusText}`);
  }
  const files = await response.json();
  console.log(files)
  return { files };
}