# Machine Learning in Browser
During the meeting on July 9th we are going to discover why and where machine learning can be run without any server.

## Examples from Tensorflow JS
This subfolder [tf_original_examples](tf_original_examples) contains curated 2 examples from many in the [offical repo from Tensorflow](https://github.com/tensorflow/tfjs-examples). 

The first is `mobilenet` which shows image classification, the second is `sentiment` which show-cases NLP analysis.

To run them just `cd` into a subfolder (f.e. `mobilenet`)
```bash
npm i
npm run watch
```
The app is running on port [1234](http://localhost:1234)

## React app measuring toxicity (in my city..)
*tribute to SOAD

App is located in the subfolder [toxicity_react](toxicity_react)

Simple app based on React measuring toxicity of text using the browser based ML inference. To run `cd` into folder and 
```
npm i
npm run start
```
The app is running on port [3000](http://localhost:3000)

## Read more
if you want to learn more about how does deep learning work, read and practice yourself (you can feel like you were a NN!) [here](https://jalammar.github.io/visual-interactive-guide-basics-neural-networks/)

if you want to play with training and inferring in a browser, [play Pacman here](https://quebecartificialintelligence.com/webcam-transfer-learning-v1/)

to use ML you don't have to train them yourself, just use them
- [JS models here](https://www.tensorflow.org/js/models)
- [hub of models](https://tfhub.dev/)


