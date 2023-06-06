import React from 'react'
import './red.scss'
function Red({data}) {
  return (
    <div className='rad'> 
    <table>
      <thead className='head'>
        <tr >
          <th>Index</th>
          <th>Model</th>
          <th>SCV15x1</th>
        </tr>
      </thead>
      <tbody>
        {data[0].map((obj, index) => (
          <tr key={index} className="my-row-class">
            <td>{index}</td>
            <td>{JSON.stringify(obj.MODEL)}</td>
            <td>{JSON.stringify(obj.SCV15x1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Red