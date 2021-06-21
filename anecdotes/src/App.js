import React, { useState, useEffect } from "react";

const Button = (props) => {
  return <button onClick={props.action}> {props.text} </button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  let randomAnec;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

  const [mostVoted, setMostVoted] = useState(0);

  const voteIncrease = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const setRandom = () => {
    randomAnec = () => Math.floor(Math.random() * anecdotes.length);
    console.log(randomAnec());

    setSelected(randomAnec);
  };

  useEffect(() => {
    const maxVotes = votes.indexOf(Math.max(...votes));
    if (votes[maxVotes] <= votes[mostVoted]) {
      return;
    } else {
      setMostVoted(maxVotes);
    }
  }, [votes, mostVoted]);

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes</p>
      <Button action={setRandom} text="next anecdote" />
      <Button action={voteIncrease} text="vote" />

      <h1> Anecdote with the Most Votes</h1>
      <p> {anecdotes[mostVoted]} </p>
      <p> has {votes[mostVoted]} votes</p>
    </div>
  );
};

export default App;
