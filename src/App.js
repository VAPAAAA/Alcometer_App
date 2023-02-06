import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function Alcometer() {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  function calculate(event) {
    event.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result = 0;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    result = result < 0 ? 0 : result;
    setResult(result.toFixed(2));
  }
  return (
    <div>
      <h1>Alcometer</h1>
      <form onSubmit={calculate}>
        <label>Weight:</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
        <br />
        <label>Gender:</label>
        <label>Male</label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
        <label>Female</label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
        <br />
        <label>Bottles:</label>
          <input type="number" value={bottles} onChange={e => setBottles(e.target.value)} />
        <br />
        <label>Time:&nbsp;&nbsp;&nbsp;</label>
          <input type="number" value={time} onChange={e => setTime(e.target.value)} />
        <br />
        <button type="submit">Calculate</button>
      </form>
      <h2>Your blood alcohol level is: {result} %</h2>
    </div>
  );
}

export default Alcometer;
