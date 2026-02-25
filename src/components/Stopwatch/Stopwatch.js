import { useState, useRef } from 'react';
import styles from './Stopwatch.module.scss';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

const Stopwatch = () => {

  const [time, setTime] = useState(0);

  const intervalRef = useRef(null);

  const handleStart = () => {

    if(intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {

      setTime(prevTime => prevTime + 10);

    }, 10);

  };

  const handleStop = () => {

    clearInterval(intervalRef.current);

    intervalRef.current = null;

  };

  const handleReset = () => {

    handleStop();

    setTime(0);

  };

  return (

    <div className={styles.stopwatch}>

      <Timer time={time} />

      <div className={styles.buttons}>

        <Button onClick={handleStart}>
          START
        </Button>

        <Button onClick={handleStop}>
          STOP
        </Button>

        <Button onClick={handleReset}>
          RESET
        </Button>

      </div>

    </div>
  );

};

export default Stopwatch;