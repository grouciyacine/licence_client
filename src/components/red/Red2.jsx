import React from 'react'

function Red2({data}) {
    return (
        <div className='rad'> 
        <table>
          <thead className='head'>
            <tr >
              <th>Index</th>
              <th>Point</th>
              <th>NO</th>
              <th>WE</th>
              <th>N</th>
              <th>P</th>
              <th>K</th>
            </tr>
          </thead>
          <tbody>
            {data[0].map((obj, index) => (
              <tr key={index} className="my-row-class">
                <td>{index}</td>
                <td>{JSON.stringify(obj.Point)}</td>
                <td>{JSON.stringify(obj.NO)}</td>
                <td>{JSON.stringify(obj.WE)}</td>
                <td>{JSON.stringify(obj.N)}</td>
                <td>{JSON.stringify(obj.P)}</td>
                <td>{JSON.stringify(obj.K)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )
    }

export default Red2