import React from 'react';
import logo from './logo.svg';
import './App.css';
require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');

function App() {


  // The minimum prediction confidence.
  const threshold = 0.9;

  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.
  toxicity.load(threshold).then((model: any) => {
    const sentences = ['you suck'];

    model.classify(sentences).then((predictions: any) => {
      // `predictions` is an array of objects, one for each prediction head,
      // that contains the raw probabilities for each input along with the
      // final prediction in `match` (either `true` or `false`).
      // If neither prediction exceeds the threshold, `match` is `null`.

      console.log(predictions);
      /*
      prints:
      {
        "label": "identity_attack",
        "results": [{
          "probabilities": [0.9659664034843445, 0.03403361141681671],
          "match": false
        }]
      },
      {
        "label": "insult",
        "results": [{
          "probabilities": [0.08124706149101257, 0.9187529683113098],
          "match": true
        }]
      },
      ...
      */
    });
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
