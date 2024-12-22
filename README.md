

# ZenoPay API Integration

This project demonstrates how to send a POST request to the ZenoPay API using Node.js with the Axios library. It sends an order creation request to the API and logs the response or any errors encountered.

## Requirements

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**

   ```bash
   npm install axios qs
   ```

## Configuration

Update the `data` object in the `index.js` file with your ZenoPay API credentials and order details:

- `buyer_name`: The name of the buyer.
- `buyer_phone`: The phone number of the buyer.
- `buyer_email`: The email address of the buyer.
- `amount`: The amount to be charged.
- `account_id`: Your ZenoPay account ID.
- `secret_key`: Your ZenoPay API secret key (if required).
- `api_key`: Your ZenoPay API key.

## Usage

1. **Create the `index.js` File**

   Save the following code to `index.js`:

   ```javascript
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

   ```

WEBHOOK


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';

    // Collect the raw POST data
    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      // Log the raw data with a timestamp
      const logEntry = `[${new Date().toISOString()}] WebHook Data: ${data}\n`;
      fs.appendFile('weblogs.txt', logEntry, err => {
        if (err) {
          console.error('Error writing to file:', err);
        }
      });

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Webhook received');
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


2. **Run the Script**

   ```bash
   node index.js
   ```

## Error Handling

Errors during the API request are logged to the console. Check the `error.response` object for detailed information if available.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
