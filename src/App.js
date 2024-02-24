import React, { useState, useEffect } from 'react';
import TableRow from './components/TableRow';
import "./App.css"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setData(data))
     
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log('data')

  return (
    <div>
      <h1>Cryptocurrency Market</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto, index) => (
            <TableRow key={index} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
