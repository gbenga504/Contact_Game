import config from "../game.config";
import gameAsset from "../assets/gameAsset.json";

/**
* @namespace 
*/
let gameController = {};

/**
* @prop
*/
gameController.worker = null;
gameController.isAllAssetsLoaded = false;
gameController.setAssetLoadedCount = 0;
gameController.gamePanel = null;
gameController.loadingText = null;
gameController.DOMElement = {};

/**
* @param {object} worker 
* sets the worker name 
*/
gameController.initWorker = worker => {
  gameController.worker = worker;
};

/**
*@param {string}  id 
*@param {string} src 
*creates an image in a canvas and loads and appends it to the game panel if it hasn't 
*/
gameController.loadImage = (className, src) => {
  let img = new Image();
  img.setAttribute("class", className);

  img.onload = function() {
    gameController.loadingText.innerHTML = "LOADING GRAPHICAL COMPONENTS";
    let canvas = document.createElement("canvas");
    canvas.setAttribute("class", this.className);
    canvas.width = this.width;
    canvas.height = this.height;
    gameController.gamePanel.appendChild(canvas);

    let ctx = canvas.getContext("2d");
    ctx.drawImage(this, 0, 0);

    ++gameController.setAssetLoadedCount;
    gameController.DOMElement[className] = canvas;
    gameController.checkIfAllAssetIsLoaded();
  };

  img.src = src;
};

/**
* @param {string} id 
* @param {string} src 
* This function creates and loads the game audio while appending it to the game panel 
*/
gameController.loadAudio = (className, src) => {
  let audio = new Audio();
  audio.setAttribute("class", className);

  audio.addEventListener("canplaythrough", function() {
    gameController.loadingText.innerHTML = "LOADING AUDIO COMPONENTS";
    gameController.gamePanel.appendChild(this);

    ++gameController.setAssetLoadedCount;
    gameController.DOMElement[className] = this;
    gameController.checkIfAllAssetIsLoaded();
  });
  audio.src = src;
};

/**
 * @return {string}
 * @param {string} name 
 * Generates the image src based on the width of the window 
 */
gameController.composeImageSrc = name => {
  let width = window.innerWidth,
    src = "";

  if (width >= 0 && width <= 767) src = `${config.imagePath.sm}/${name}`;
  else if (width >= 768 && width <= 991) src = `${config.imagePath.md}/${name}`;
  else if (width >= 992) src = `${config.imagePath.lg}/${name}`;
  return src;
};

/**
 * This function loads the css fro the game at run time 
 */
gameController.loadCSS = () => {
  let element = document.createElement("link");
  element.setAttribute("rel", "stylesheet");
  element.setAttribute("type", "text/css");
  element.setAttribute("href", config.css);
  document.head.appendChild(element);
};

/**
* This function loads all the assets for the game 
*/
gameController.loadAssets = (gamePanel, loadingText) => {
  gameController.gamePanel = gamePanel;
  gameController.loadingText = loadingText;

  if (!gameController.isAllAssetsLoaded) {
    gameController.loadCSS();
    for (let asset of gameAsset) {
      let { type, className, name } = asset;
      if (type === "audio") {
        gameController.loadAudio(className, `${config.musicPath}/${name}`);
      } else {
        let newSrc = gameController.composeImageSrc(name);
        gameController.loadImage(className, newSrc);
      }
    }
  } 
};

/**
* @param {HTMLElement} assetLoadingTextRef 
* @param {HTMLElement} assetLoadingContainerRef
* function checks all assets to make sure that they have been loaded 
*/
gameController.checkIfAllAssetIsLoaded = () => {
  let percent = gameController.setAssetLoadedCount / gameAsset.length * 100;
  if (percent === 100) {
    gameController.loadingText.innerHTML = "ALL COMPONENTS FULLY LOADED";
    gameController.DOMElement["gameCanvas"].classList.add("gameCanvasShow");
    gameController.DOMElement["openingMusic"].play();
    //@TODO make a post to web workers to make the comment based on that part
    gameController.isAllAssetsLoaded = true;
  }
};

export default gameController;
