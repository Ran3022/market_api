import React from 'react';

function TableRow({ crypto }) {
  return (
    <tr>
      <td>
        <img src={crypto.image} alt={crypto.name} style={{ width: '30px', marginRight: '10px' }} />
        {crypto.name}
      </td>
      <td>{crypto.symbol}</td>
      <td>{crypto.current_price}</td>
      <td>{crypto.total_volume}</td>
    </tr>
  );
}

export default TableRow;

