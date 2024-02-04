import { useState } from 'react';
import './App.css';

const phrases = [
  'No',
  '¿Estas segura?',
  '¿Realmente?',
  '¿De verdad?',
  '¿Segura?',
  'No me hagas esto',
  'Voy a llorar...',
  'Estas rompiendo mi corazón',
  '¿Por qué me haces esto?',
  '¿Por qué me odias?',
  '¿Por qué me haces sufrir?',
];

export const App = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 17;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://i.pinimg.com/originals/d7/2f/c9/d72fc961a47eec1396864393ff33a566.gif"
            alt="bears kissing"
          />
          <h1 className="text">Yupi!!!</h1>
        </>
      ) : (
        <>
          <img
            src="https://i.pinimg.com/originals/7f/71/93/7f7193131963d7913e4eff9ad2700c7f.gif"
            alt="bear with hearts"
          />
          <h1>¿Quieres ser mi valentín?</h1>
          <div className="container-button">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sí
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
