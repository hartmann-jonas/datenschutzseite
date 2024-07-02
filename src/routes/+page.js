/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const response = await fetch(`/api/files`);
    const files = await response.json();
  
    return {
      files,
    };
  };