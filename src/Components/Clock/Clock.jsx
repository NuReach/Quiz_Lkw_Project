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
          return <div className='p-3'>
          {
            hours != 0 && hours + " h "
          }
          {
            minutes != 0 && minutes + " mn "
          }
          {
            seconds + " s "
          }
           
          </div>;
        }
      };
    
  return (
    <div className='w-full'>
        <section className=''>
            <div className='bg-pink-500 rounded-md text-center justify-center items-center flex font-mono  border  text-white text-sm   '>
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
