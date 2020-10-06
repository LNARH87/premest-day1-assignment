import React from 'react';

function ComponentTwo(){
    return(
        <>
            <h2>This is my 2nd Component</h2>
            <table border="1">
                <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col">Number of Items to Ship</th>
                    <th scope="col">Next Action</th>
                </tr>
                <tr>
                    <td>Adam’s Greenworks</td>
                    <td>14</td>
                    <td>Package Items</td>
                </tr>
                <tr>
                    <td>Davie's Burgers</td>
                    <td>2</td>
                    <td>Send Invoice</td>
            </tr>
	        </table>  
        </>
    )
}

export default ComponentTwo;