import React from 'react';

function Habitat() {
  return (
    <>  
        <h2>Habitat</h2>
        <h3>Countries with Large Brown Bear Populations</h3>
        <table border="1">
		<tr>
			<th scope="col">Country</th>
			<th scope="col">Bear Population</th>
		</tr>
		<tr>
			<td>Russia</td>
			<td>120,000</td>
		</tr>
		<tr>
            <td>United States</td>
			<td>32,500</td>
        </tr>
        <tr>
            <td>Canada</td>
			<td>25,000</td>
      </tr>

	</table>
    </>
  );
}

export default Habitat;