import React, { useEffect, useState } from 'react';
import questionsList from './questions.json';
import './App.css';

const Jigsaw = () => {
  const [count, setCount] = useState(0);
  const [lives, setLives] = useState(3);
  return (
    <div className="puzzle-wrapper">
      <div className="puzzle-score">
        <div>{[...Array(3).keys()].map(
          (item) => <span className="puzzle-life">♥</span>
        )}</div>
        <div>{count}</div>
      </div>
      <div className="puzzle-layers">
        <img src={`${process.env.PUBLIC_URL}/img/anchorjigsaw.png`} className="puzzle-image" alt="Jigsaw puzzle"/>
        <div className="puzzle">
        {[...Array(9).keys()].map(
          (item, i) => <div key={`jgswp-${i}`} className="puzzle-piece" id={`puzzle-piece-${i}`}></div>
          )}</div>
      </div>
      <div className>
        {lives && count < 9 && (
          <div className="question-wrapper">
            <p>{`${count + 1}) `}{questionsList[count].text}</p>
            <ol className='answers'>
              {questionsList[count].answers.map(
                (answer, i) => <li key={`jgswa-${i}`}>
                  <button onClick={() => {
                    if(questionsList[count].correct === i) {
                      setCount(count + 1);
                      document.querySelector(
                        `#puzzle-piece-${count}`
                        ).classList.add(
                          'puzzle-piece--solved',
                        );
                    } else {
                      setLives(lives - 1);
                      document.querySelector(
                        `.puzzle-life`
                        ).remove();
                    }
                }
                }>{answer}</button></li>
              )}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Jigsaw />
    </div>
  );
}

export default App;
