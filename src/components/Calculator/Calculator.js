import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Modal from '../../components/Modal/Modal';
import getDate from '../../services/getDate';
import getTotalMoney from '../../services/getTotalMoney';
import styles from './Calculator.module.css';

export default function InputSlider() {
  /* InputSlider money */

  const [money, setMoney] = useState(1500);

  const handleSliderMoneyChange = (event, newValue) => {
    setMoney(newValue);
  };

  const handleInputMoneyChange = event => {
    setMoney(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlurMoney = () => {
    if (money < 1000) {
      setMoney(1000);
    } else if (money > 5000) {
      setMoney(5000);
    }
  };

  /* InputSlider day */

  const [day, setDay] = useState(20);

  const handleSliderDayChange = (event, newValue) => {
    setDay(newValue);
  };

  const handleInputDayChange = event => {
    setDay(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlurDay = () => {
    if (day < 3) {
      setDay(3);
    } else if (day > 30) {
      setDay(30);
    }
  };

  /* Promocode */

  const [isValidPromo, setIsValidPromo] = useState(false);
  const [betPromo, setBetPromo] = useState(1);

  const getIsValidPromo = isValidData => {
    console.log(isValidData);
    if (isValidData) {
      setIsValidPromo(true);
    }
  };

  /* Total money */

  const [bet, setBet] = useState(1.75);

  return (
    <div className={styles.calculator}>
      <div className={styles.moneyBox}>
        <Typography id="input-slider-money" gutterBottom>
          Сума
        </Typography>
        <div className={styles.slider}>
          <Slider
            value={typeof money === 'number' ? money : 0}
            onChange={handleSliderMoneyChange}
            aria-labelledby="input-slider-money"
            step={50}
            min={1000}
            max={5000}
          />
          <Input
            className="input"
            value={money}
            margin="dense"
            onChange={handleInputMoneyChange}
            onBlur={handleBlurMoney}
            inputProps={{
              step: 50,
              min: 1000,
              max: 5000,
              type: 'number',
              'aria-labelledby': 'input-slider-money',
            }}
          />
        </div>
        <span className={styles.unit}>грн</span>
      </div>
      <div className={styles.dayBox}>
        <Typography id="input-slider-day" gutterBottom>
          Строк
        </Typography>
        <div className={styles.slider}>
          <Slider
            value={typeof day === 'number' ? day : 0}
            onChange={handleSliderDayChange}
            aria-labelledby="input-slider-day"
            step={1}
            min={3}
            max={30}
          />
          <Input
            className="input"
            value={day}
            margin="dense"
            onChange={handleInputDayChange}
            onBlur={handleBlurDay}
            inputProps={{
              step: 1,
              min: 3,
              max: 30,
              type: 'number',
              'aria-labelledby': 'input-slider-day',
            }}
          />
        </div>
        <span className={styles.unit}>днів</span>
      </div>
      <div className={styles.resultBox}>
        <div className={styles.resultInfo}>
          <div className={styles.resultMoney}>
            <span className={styles.name}>Сума погашення</span>
            <div className={styles.resultMoneyBox}>
              <span className={styles.value}>
                {getTotalMoney(money, day, bet, false, betPromo)}
              </span>
              {isValidPromo && (
                <span className={styles.promoMoney}>
                  {getTotalMoney(money, day, bet, isValidPromo, betPromo)}
                </span>
              )}
              грн
            </div>
          </div>
          <div className={styles.resultDay}>
            <span className={styles.name}>Дата погашення</span>
            <span className={styles.value}>{getDate(day)}</span>
          </div>
        </div>
        <Modal getIsValidPromo={getIsValidPromo} />
        <button className={styles.btn} type="button">
          <Link to={routes.LOGIN.path}>оформити кредит</Link>
        </button>
      </div>
    </div>
  );
}
