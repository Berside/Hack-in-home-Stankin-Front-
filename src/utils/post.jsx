import endpoints from './endpoint.jsx';
const baseUrl = endpoints();

export async function post(formdata) {
    console.log(formdata);
  try {
    const response = await fetch(`${baseUrl}/api/v1/segmentation`, {
      method: 'POST',
      body: formdata,
    });
    const result = await response;
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}