import React, { useEffect, useRef, useState } from 'react'
import Countdown from 'react-countdown'
import { useNavigate } from 'react-router-dom';

export default function Clock() {
    const [timeLeft, setTimeLeft] = useState(900);
    const intervalRef = useRef(null);
    const navigate = useNavigate();
    //console.log(intervalRef.current);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);
      
        intervalRef.current = intervalId;

        return () => clearInterval(intervalId);
      }, []);
    
      const Completionist = () => {
        navigate("/");
      };

      const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <div className='p-3 flex flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5z"/></svg>
            <div className='font-bold flex font-mono'>
            {
              hours != 0 && hours + ":"
            }
            {
              minutes != 0 && minutes + ":"
            }
            {
              seconds + ""
            }
            <p className='pl-1'>Left</p>
            </div>      
          </div>;
        }
      };
    
  return (
    <div className='w-full'>
        <section className=''>
            <div>
                 <Countdown 
                 date={Date.now() + timeLeft * 1000}
                 renderer={renderer}
                 >
                </Countdown>
            </div>
        </section>
    </div>
  )
}
