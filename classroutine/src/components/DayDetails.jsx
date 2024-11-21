import React from 'react'

const DayDetails = ({day,data}) => {

    console.log(data)
  return (
    <div>

        <h1 className='text-[36px] text-center'>{day}Day Routine</h1>
        <table className='bg-gradient-to-r from-slate-700 to-zinc-500'>
            
    <thead className='bg-gradient-to-r from-green-800 to-blue-800 border border-blue-800 text-yellow-500'>
        <tr>
          
          <th className=' border'><h2>Teachers</h2></th>
          <th className=' border'><h2>1st</h2><h3>S-10:00 <br />E-10:50</h3></th>
          <th className=' border'><h2>2nd</h2><h3>S-10:50 <br />E-11:40</h3></th>
          <th className=' border'><h2>3rd</h2><h3>S-11:40 <br />E-12:30</h3></th>
          <th className=' border'><h2>4th</h2><h3>S-12:30 <br />E-1:20</h3></th>
          <th className=' border' ><h2>5th</h2><h3>S-1:50 <br />E-2:40</h3></th>
          <th className=' border'><h2>6th</h2><h3>S-2:40 <br />E-3:30</h3></th>
         
        </tr>
    </thead>
    <tbody className='text-white font-bold'>
       {data.map((row,index)=>(
        <tr key={index}>
            <td>
                {row.teacher}
            </td>
            {row.periods.map((period,idx) =>(
                <td key={idx}>
                    {period}

                </td>
            ))}

        </tr>
       ))}    
    </tbody>  
        </table>
    </div>
  )
}

export default DayDetails