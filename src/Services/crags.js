import axios from 'axios';

const baseUrl = 'https://calm-scrubland-38065.herokuapp.com/';

export async function getDryCrag(postcode) {
  console.log(postcode);
  const response = await axios({
    method: 'get',
    url: `${baseUrl}api/weather/?postcode=${postcode}&miles=100`,
  });
  return response.data;
}
