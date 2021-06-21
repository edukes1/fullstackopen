import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.type}> {props.text}</button>;
};

const Stat = (props) => {
  return (
    <tr>
      {" "}
      {props.text}..... <td>{props.value} </td>{" "}
    </tr>
  );
};

const Statistics = ({
  bad,
  good,
  neutral,
  average,
  positiveRatio,
  allClicks,
}) => {
  if (bad === 0 && good == 0 && neutral == 0) {
    <h1>statistics</h1>;
    return <li> No feedback given</li>;
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <Stat text="good" value={good} />
        <Stat text="neutral" value={neutral} />

        <Stat text="bad" value={bad} />
        <Stat text="all" value={allClicks.length} />
        <Stat text="average" value={average(allClicks)} />

        <Stat text="Positive Percentage" value={positiveRatio(allClicks)} />
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const goodIncrease = () => {
    setGood(good + 1);
    setAll(allClicks.concat(1));
  };
  const neutralIncrease = () => {
    setNeutral(neutral + 1);
    setAll(allClicks.concat(0));
  };
  const badIncrease = () => {
    setBad(bad + 1);
    setAll(allClicks.concat(-1));
  };

  const average = (array) =>
    array.reduce((arr1, arr2) => arr1 + arr2, 0) / array.length;
  const positives = [];
  const positiveRatio = (array) => {
    array.forEach((x) => {
      if (x > 0) positives.push(x);
    });
    return positives.length / array.length;
  };

  return (
    <div>
      <h1> give feedback</h1>
      <Button type={goodIncrease} text="good" />
      <Button type={neutralIncrease} text="neutral" />
      <Button type={badIncrease} text="bad" />
      <Statistics
        average={average}
        bad={bad}
        good={good}
        neutral={neutral}
        positiveRatio={positiveRatio}
        allClicks={allClicks}
      />
    </div>
  );
};

export default App;
