import React, { useState } from 'react'
import DayDetails from './DayDetails';

const Routine2 = () => {

    const routineData = {
        Sun: [
          { teacher: "SA", periods: ["-", "-", "-", "H-B (XII)", "BS-B (XII)", "-"] },
          { teacher: "MR", periods: ["-", "SC-B (XII)", "-", "-", "SC-C (XI)", "-"] },
          { teacher: "MK", periods: ["H-A (XI)", "-", "-", "BS-A (XI)", "-", "-"] },
          { teacher: "SM", periods: ["-", "BS-B (XI)", "SC-A (XII)", "-", "-", "-"] },
          { teacher: "JM", periods: ["BS-A (XII)", "-", "-", "SC-C (XII)", "-", "SC-B (XI)"] }
        ],
        Mon: [
          { teacher: "SA", periods: ["-", "H-A (XII)", "SC-A (XII)", "-", "-", "-"] },
          { teacher: "MR", periods: ["SC-A (XI)", "-", "-", "BS-A (XII)", "-", "-"] },
          { teacher: "MK", periods: ["BS-B (XI)", "-", "-", "-", "SC-C (XI)", "-"] },
          { teacher: "SM", periods: ["BS-B (XII)", "-", "SC-C (XII)", "-", "-", "H-B (XI)"] },
          { teacher: "JM", periods: ["-", "BS-A (XI)", "H-B (XII)", "-", "-", "-"] }
        ],
        Tues: [
          { teacher: "SA", periods: ["-", "SC-B (XI)", "SC-A (XII)", "-", "-", "-"] },
          { teacher: "MR", periods: ["SC-B (XII)", "-", "SC-A (XI)", "-", "-", "-"] },
          { teacher: "MK", periods: ["-", "-", "-", "BS-A (XII)", "-", "BS-B (XI)"] },
          { teacher: "SM", periods: ["H-B (XII)", "-", "-", "H-A (XI)", "-", "H-B (XI)"] },
          { teacher: "JM", periods: ["-", "H-A (XII)", "-", "-", "BS-B (XII)", "-"] }
        ],
        Wed: [
          { teacher: "SA", periods: ["-", "BS-A (XI)", "-", "-", "SC-B (XII)", "-"] },
          { teacher: "MR", periods: ["H-B (XI)", "-", "-", "H-A (XI)", "-", "-"] },
          { teacher: "MK", periods: ["-", "-", "SC-A (XI)", "SC-B (XI)", "-", "BS-A (XII)"] },
          { teacher: "SM", periods: ["SC-C (XI)", "-", "-", "-", "-", "H-A (XII)"] },
          { teacher: "JM", periods: ["-", "-", "SC-C (XII)", "BS-B (XII)", "-", "H-B (XII)"] }
        ],
        Thrus: [
          { teacher: "SA", periods: ["-", "-", "-", "SC-C (XII)", "BS-A (XII)", "-"] },
          { teacher: "MR", periods: ["SC-B (XI)", "-", "-", "-", "-", "-"] },
          { teacher: "MK", periods: ["-", "-", "-", "-", "BS-B (XII)", "SC-C (XI)"] },
          { teacher: "SM", periods: ["-", "-", "BS-A (XI)", "-", "-", "SC-A (XI)"] },
          { teacher: "JM", periods: ["-", "-", "-", "BS-B (XI)", "-", "H-A (XII)"] }
        ]
      };

      const [selectedDay,setSelectedDay] = useState(null);
      const handleDayClick = (day) =>{
        setSelectedDay(day)
        console.log(day)
      }
  return (
    
    <div>
        <table className='border-2 font-bold'>
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
        {Object.keys(routineData).map((day) =>(
            <React.Fragment key={day}>
                {routineData[day].map((row,index)=>
                   (
                    <tr key={`${day}-${index}`} className={
                        index === 0 ? 'bg-white'
                        : index === 1 ? 'bg-slate-300'
                        :'' }>
                          {index === 0 && (
                            <td rowSpan={routineData[day].length}onClick={()=> handleDayClick(day)}
                            className='cursor-pointer'>{day}</td>
                          )}
                          <td>{row.teacher}</td>     
                          {row.periods.map((period,pIndex)=>(
                            <td key={`${day}-${index}-${pIndex}`}>
                                {period}
                            </td>
                          ))}                   
                   </tr>
                   )
                )}

            </React.Fragment>
        ))}
        </table>

        <DayDetails day={selectedDay} data={routineData[selectedDay]}/>
    </div>
  )
}

export default Routine2