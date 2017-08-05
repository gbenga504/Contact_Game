export default () => {
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
   *@param {HTMLTextElement} assetLoadingTextRef
   *@param {HTMLElement} gamePanelRef 
   *creates an image in a canvas and loads and appends it to the game panel if it hasn't 
  */
  gameController.loadImage = (id, src, assetLoadingTextRef, gamePanelRef) => {
    let img = new Image();
    img.setAttribute("id", id);

    img.onload = function() {
      if (gameController.gameAssetLoadProgress[this.id] !== true) {
        assetLoadingTextRef.innerHTML = "LOADING GRAPHICAL COMPONENTS";
        let canvas = document.createElement("canvas");
        canvas.setAttribute("id", this.id);
        canvas.width = this.width;
        canvas.height = this.height;
        gamePanelRef.appendChild(canvas);

        gamePanelRef.gameAssetLoadProgress[this.id] = true;

        let ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);
        gamePanelRef.checkIfAllAssetIsLoaded();
      }
    };
  };

  /**
 * @param {string} id 
 * @param {string} src 
 * @param {HTMLTextElement} assetLoadingTextRef
 * @param {HTMLElement} gamePanelRef
 * This function creates and loads the game audio while appending it to the game panel 
 */
  gameController.loadAudio = (id, src, assetLoadingTextRef, gamePanelRef) => {
    let audio = new Audio();
    audio.setAttribute("id", id);

    audio.addEventListener("canplaythrough", function() {
      if (gameController.gameAssetLoadProgress[this.id] !== true) {
        assetLoadingTextRef.innerHTML = "LOADING AUDIO COMPONENTS";
        gameController.gameAssetLoadProgress[this.id] = true;
        gameController.checkIfAllAssetIsLoaded();

        gamePanelRef.appendChild(this);
      }
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
    if (width >= 0 && width <= 767) src = `/images/xs/${name}`;
    else if (width >= 768 && width <= 991) src = `/images/sm/${name}`;
    else if (width >= 992) src = `/images/lg/${name}`;
    return src;
  };

  /**
   * This function loads all the assets for the game 
   */
  gameController.loadAssets = () => {
    if (!gameController.isAllAssetsLoaded) {
      for (let assets in gameController.assetsDocker) {
        let { type, id, src } = assets;
        if (type === "audio") {
          gameController.loadAudio(id, src);
        } else {
          let newSrc = gameController.composeImageSrc(src);
          gameController.loadImage(id, newSrc);
        }
      }
    } else {
      //@TODO perform fade in animation here
      gameController.introMusic.play();
      //@TODO send message to worker to read first comment
    }
  };

  /**
   * @param {HTMLElement} assetLoadingTextRef 
   * @param {HTMLElement} assetLoadingContainerRef
   * @param {HTMLElement} lifelineExposureRef
   * function checks all assets to make sure that they have been loaded 
   */
  gameController.checkIfAllAssetIsLoaded = (
    assetLoadingTextRef,
    assetLoadingContainerRef,
    lifelineExposureRef
  ) => {
    let percent =
      gameController.setAssetLoadedCount /
      gameController.assetsDocker.length *
      100;
    if (percent === 100) {
      assetLoadingTextRef.innerHTML = "ALL COMPONENTS FULLY LOADED";
      assetLoadingContainerRef.style.display = "none";
      //@TODO fade the lifetime asset container
      gameController.introMusic.play();
      //@TODO make a post to web workers to make the comment based on that part
      gameController.isAllAssetsLoaded = true;
    }
  };

  return gameController;
};
