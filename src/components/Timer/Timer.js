import styles from './Timer.module.scss';
import formatTime from '../../utils/formatTime';

const Timer = ({ time }) => {

  return (
    <div className={styles.timer}>
      {formatTime(time)}
    </div>
  );

};

export default Timer;