import React, { useEffect, useState } from 'react';
import './States.css';

const States = () => {
  const statistic = [
    {
      stateName: "Years Of Experience",
      stateValue: 12,
    },
    {
      stateName: "Success Project",
      stateValue: 85,
    },
    {
      stateName: "Active Project",
      stateValue: 15,
    },
    {
      stateName: "Happy Customers",
      stateValue: 95,
    },
  ];

  const [started, setStarted] = useState(false);

  const startCount = (el, goal) => {
    let count = setInterval(() => {
      el.textContent++;
      if (parseInt(el.textContent) === goal) {
        clearInterval(count);
      }
    }, 2500 / goal);
  };

  const handleScroll = () => {
    const elements = document.querySelectorAll('.state-num');
    if (!started) {
      elements.forEach((el, index) => startCount(el, statistic[index].stateValue));
      setStarted(true);
      window.removeEventListener('scroll', handleScroll); // Remove the event listener after starting
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [started, statistic]);

  return (
    <div className='state'>
      <div className='container'>
        {statistic.map((data, index) => (
          <div className='state-box' key={index}>
            <div className='state-num'>0</div>
            <div className='state-name'>{data.stateName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default States;
