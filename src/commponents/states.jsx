import React from 'react'

const States = () => {
 let statistic = [
    {
        stateName:"Years Of Experiance",
        stateValue:12,
    },
    {
        stateName:"Success Project",
        stateValue:85,
    },
    {
        stateName:"Active Project",
        stateValue:15,
    },
    {
        stateName:"Happy Customers",
        stateValue:95,
    },
];   


  return (
    <div className='state'>
    <div className='container'>

    {statistic.map((data) => (     
    <div className='state-box'>
        <div className='state-num'>{data.stateValue}</div>
        <div className='state-name'>{data.stateName}</div>
      </div>  
    ))}
    </div>  
    </div>  )
}

export default States;