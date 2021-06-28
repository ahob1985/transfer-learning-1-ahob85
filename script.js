// Author: Aaron Hobson

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let buttonDiv;
let happyButton;
let sadButton;
let trainButton;

// Global ML Variables
let featureExtractor;
let classifier;
let video;
let happies;
let sads;
let isModelReady;
let isTrainingComplete;

function setup() {
  // Build UI
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait...");
  textP.parent(textDiv);
  buildButtons();
  // Initialize happies and sads to 0
  happies = 0;
  sads = 0;
  // Initialize isModelReady and isTrainingComplete
  isModelReady = false; 
  isTrainingComplete = false; 
  // Load the video 
  video = createCapture(VIDEO, videoReady);
}

function draw() {

}

function buildButtons() {
  buttonDiv = createDiv();
  happyButton = createButton("Happy");
  happyButton.parent(buttonDiv);
  happyButton.mousePressed(function() {
    
  });
}

function videoReady() {

}

function featureExtractorLoaded() {

}

function modelReady() {

}

function whileTraining(loss) {

}

function gotResults(error, results) {

}
