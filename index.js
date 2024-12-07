// Use ES module import
import axios from 'axios';  // Import axios
import qs from 'qs';         // Import qs (for x-www-form-urlencoded)

const url = 'https://api.zeno.africa';

// Data to be sent
const data = {
  buyer_name: 'william',
  buyer_phone: '0689726060',
  buyer_email: 'william@zeno.co.tz',
  amount: 1000,
  account_id: 'zp82240',
  secret_key: 'YOUR_SECRET_KEY',  // Replace with your actual secret key
  api_key: 'YOUR_API_KEY'         // Replace with your actual API key
};

// Convert data to x-www-form-urlencoded format
const formattedData = qs.stringify(data);

// Send POST request to the Zeno API
axios.post(url, formattedData, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
