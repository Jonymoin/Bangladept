import React from 'react'

const Demo = () => {
  return (
    <div className='mt-[100px]'>
         <table className='border-2 border-black font-bold'>
      <thead className='bg-gradient-to-r from-stone-800 to-blue-500 border border-blue-800 text-white'>
        <tr>
          <th className=' border'><h2>Day/Period </h2></th>
          <th className=' border'><h2>Teachers</h2></th>
          <th className=' border'><h2>1st</h2><h3>S-10:00 <br />E-10:50</h3></th>
          <th className=' border'><h2>2nd</h2><h3>S-10:50 <br />E-11:40</h3></th>
          <th className=' border'><h2>3rd</h2><h3>S-11:40 <br />E-12:30</h3></th>
          <th className=' border'><h2>4th</h2><h3>S-12:30 <br />E-1:20</h3></th>
          <th className=' border' ><h2>5th</h2><h3>S-1:50 <br />E-2:40</h3></th>
          <th className=' border'><h2>6th</h2><h3>S-2:40 <br />E-3:30</h3></th>
         
        </tr>
      </thead>
      <tbody className='bg-gradient-to-r from-yellow-500 to-orange-500'>
        <tr className='border-2'><td rowSpan={5} className='font-bold border-r-2'>Sun</td><td className=''> SA</td><td>-</td><td>-</td><td>-</td><td>H-B (XII)</td><td>BS-B (XII)</td><td>-</td></tr>
        <tr className=''><td className=''>MR</td><td>-</td><td>SC-B (XII)</td><td>-</td><td>-</td><td>SC-C (XI)</td><td>-</td></tr>
        <tr className=''><td>MK</td><td>H-A (XI)</td><td>-</td><td>-</td><td>BS-A (XI)</td><td>-</td><td>-</td></tr>
        <tr className=''><td>SM</td><td>-</td><td>BS-B (XI)</td><td>SC-A (XII)</td><td>-</td><td>-</td><td>-</td></tr>
        <tr className=''><td>JM</td><td>BS-A (XII)</td><td>-</td><td>-</td><td>SC-C (XII)</td><td>h</td><td>SC-B (XI)</td></tr>

        
        <tr className='border-2 bg-gradient-to-r from-cyan-500 to-blue-500'><td rowSpan={5} className=''>Mon</td>
        <td className=''> SA</td>
        <td>-</td>
        <td>H-A (XII)</td>
        <td>SC-A (XII)</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
        
        <tr className='bg-gradient-to-r from-cyan-500 to-blue-500'>
          <td className=''>MR</td>
          <td>SC-A(XI)</td>
          <td>-</td>
          <td>-</td>
          <td>BS-A(XII)</td>
          <td>-</td>
          <td>-</td>
          </tr>
        <tr className='bg-gradient-to-r from-cyan-500 to-blue-500'>
          <td>MK</td>
          <td>BS-B (XI)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>SC-C (XI)</td>
          <td>-</td>
          </tr>
        <tr className='bg-gradient-to-r from-cyan-500 to-blue-500'>
          <td>SM</td>
          <td>BS-B (XII)</td>
          <td>-</td>
          <td>SC-C (XII)</td>
          <td>-</td>
          <td>-</td>
          <td>H-B (XI)</td>
          </tr>
        <tr className='bg-gradient-to-r from-cyan-500 to-blue-500'>
          <td>JM</td>
          <td>-</td>
          <td>BS-A (XI)</td>
          <td>H-B (XII)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          </tr>

          <tr className='border-2 bg-gradient-to-r from-slate-500 to-green-500'><td rowSpan={5} className='font-bold'>Tues</td>
        <td className=''> SA</td>
        <td>-</td>
        <td>SC-B (XI)</td>
        <td>SC-A (XII)</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        </tr>
        
        <tr className='bg-gradient-to-r from-slate-500 to-green-500'>
          <td className=''>MR</td>
          <td>SC-B(XII)</td>
          <td>-</td>
          <td>SC-A (XI)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          </tr>
        <tr className='bg-gradient-to-r from-slate-500 to-green-500'>
          <td>MK</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>BS-A (XII)</td>
          <td>-</td>
          <td>BS-B (XI)</td>
          </tr>
        <tr className='bg-gradient-to-r from-slate-500 to-green-500'>
          <td>SM</td>
          <td>H-B (XII)</td>
          <td>-</td>
          <td></td>
          <td>H-A (XI)</td>
          <td>-</td>
          <td>H-B (XI)</td>
          </tr>
        <tr className='bg-gradient-to-r from-slate-500 to-green-500'>
          <td>JM</td>
          <td>-</td>
          <td>H-A (XII)</td>
          <td>-</td>
          <td>-</td>
          <td>BS-B (XII)</td>
          <td>-</td>
          </tr>

          <tr className='border-2 bg-gradient-to-r from-yellow-800 to-blue-800'><td rowSpan={5} className='font-bold'>Wed</td>
        <td className=''> SA</td>
        <td>-</td>
        <td>BS-A (XI)</td>
        <td>-</td>
        <td>-</td>
        <td>SC-B (XII)</td>
        <td>-</td>
        </tr>
        
        <tr className='bg-gradient-to-r from-yellow-800 to-blue-800'>
          <td className=''>MR</td>
          <td>H-B (XI)</td>
          <td>-</td>
          <td>-</td>
          <td>H-A (XI)</td>
          <td>-</td>
          <td>-</td>
          </tr>
        <tr className='bg-gradient-to-r from-yellow-800 to-blue-800'>
          <td>MK</td>
          <td>-</td>
          <td>-</td>
          <td>SC-A (XI)</td>
          <td>SC-B (XI)</td>
          <td>-</td>
          <td>BS-A (XII)</td>
          </tr>
        <tr className='bg-gradient-to-r from-yellow-800 to-blue-800'>
          <td>SM</td>
          <td>SC-C (XI)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>H-A (XII)</td>
          </tr>
        <tr className='bg-gradient-to-r from-yellow-800 to-blue-800'>
          <td>JM</td>
          <td>-</td>
          <td>-</td>
          <td>SC-C (XII)</td>
          <td>BS-B (XII)</td>
          <td>-</td>
          <td>H-B (XII)</td>
          </tr>

          <tr className='border-2 bg-gradient-to-r from-orange-400 to-red-800'><td rowSpan={5} className='font-bold'>Thrus</td>
        <td className=''> SA</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>SC-C (XII)</td>
        <td>BS-A (XII)</td>
        <td>-</td>
        </tr>
        
        <tr className='bg-gradient-to-r from-orange-400 to-red-800'>
          <td className=''>MR</td>
          <td>-</td>
          <td>SC-B (XI)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          </tr>
        <tr className='bg-gradient-to-r from-orange-400 to-red-800'>
          <td>MK</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>BS-B (XII)</td>
          <td>SC-C (XI)</td>
          </tr>
        <tr className='bg-gradient-to-r from-orange-400 to-red-800'>
          <td>SM</td>
          <td>-</td>
          <td>-</td>
          <td>BS-A (XI)</td>
          <td>-</td>
          <td>-</td>
          <td>SC-A (XI)</td>
          </tr>
        <tr className='bg-gradient-to-r from-orange-400 to-red-800'>
          <td>JM</td>
          <td>-</td>
          <td>-</td>
          <td></td>
          <td>BS-B (XI)</td>
          <td>-</td>
          <td>H-A (XII)</td>
          </tr>


          

        
      </tbody>
    </table>


    <div>

    </div>
    </div>
  )
}

export default Demo