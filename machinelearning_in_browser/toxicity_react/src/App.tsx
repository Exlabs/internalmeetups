import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
require('@tensorflow/tfjs');
const toxicityModel = require('@tensorflow-models/toxicity');

function App() {

  const [text, setText] = useState("");
  const [identityAttack, setIdentityAttack] = useState(0);
  const [insult, setInsult] = useState(0);
  const [obscene, setObscene] = useState(0);
  const [severeToxicity, setSevereToxicity] = useState(0);
  const [sexualExplicit, setSexualEplicit] = useState(0);
  const [threat, setThreat] = useState(0);
  const [toxicity, setToxicity] = useState(0);

  // The minimum prediction confidence.
  const threshold = 0.6;

  function handleclick() {
    checkText();
  }
  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.

  const checkText = () => {
    toxicityModel.load(threshold).then((model: any) => {
      const sentences = [text];

      model.classify(sentences).then((predictions: any) => {
        // `predictions` is an array of objects, one for each prediction head,
        // that contains the raw probabilities for each input along with the
        // final prediction in `match` (either `true` or `false`).
        // If neither prediction exceeds the threshold, `match` is `null`.

        console.log(predictions);
        if (predictions[0].results[0].match) {
          setIdentityAttack(predictions[0].results[0].probabilities[1]);
        } else {
          setIdentityAttack(0);
        }
        if (predictions[1].results[0].match) {
          setInsult(predictions[1].results[0].probabilities[1]);
        } else {
          setInsult(0);
        }
        if (predictions[2].results[0].match) {
          setObscene(predictions[2].results[0].probabilities[1]);
        } else {
          setObscene(0);
        }
        if (predictions[3].results[0].match) {
          setSevereToxicity(predictions[3].results[0].probabilities[1]);
        } else {
          setSevereToxicity(0);
        }
        if (predictions[4].results[0].match) {
          setSexualEplicit(predictions[4].results[0].probabilities[1]);
        } else {
          setSexualEplicit(0);
        }
        if (predictions[5].results[0].match) {
          setThreat(predictions[5].results[0].probabilities[1]);
        } else {
          setThreat(0);
        }
        if (predictions[6].results[0].match) {
          setToxicity(predictions[6].results[0].probabilities[1]);
        } else {
          setToxicity(0);
        }

      });
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="texttocheck" name="name" onChange={e => setText(e.target.value)} />
        <button type="submit" onClick={handleclick}>submit</button>

        <h3>results</h3>
        <ul>
          <li>identity_attack {identityAttack}</li>
          <li>insult {insult}</li>
          <li>obscene {obscene}</li>
          <li>severeToxicity {severeToxicity}</li>
          <li>sexualExplicit {sexualExplicit}</li>
          <li>threat {threat}</li>
          <li>toxicity {toxicity}</li>
        </ul>

      </header>
    </div>
  );
}

export default App;
