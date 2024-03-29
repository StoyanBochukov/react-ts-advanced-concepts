import Container from './UI/Container.tsx';
import {useTimersContext, type Timer as TimerProps } from '../store/timers-context.tsx';
import { useState, useEffect, useRef } from 'react';

export default function Timer({ name, duration }: TimerProps) {

  const interval = useRef<number | null>(null)
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext()

  if(remainingTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }

  useEffect(() => {
    let timer: number
    if(isRunning){
      timer = setInterval(() => {
        setRemainingTime((prevState) => {
          if(prevState <= 0){
            return prevState
          }
          return prevState - 50
        })
      }, 50);
      interval.current = timer;
    }else if(interval.current){
      clearInterval(interval.current)
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatedRemaningTime = (remainingTime / 1000).toFixed(2);


  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime} /></p>
      <p>{formatedRemaningTime}</p>
    </Container>
  );
}