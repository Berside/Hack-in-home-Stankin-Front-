import endpoints from './endpoint.jsx';
const baseUrl = endpoints();

export async function post(formdata) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/segmentation/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formdata
    });
    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}