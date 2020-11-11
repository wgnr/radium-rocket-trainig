/*jslint bitwise:true, es5: true */
(function (window, undefined) {
  "use strict";
  var canvas = null,
    KEY_ENTER = 13,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    ctx = null,
    lastPress = null,
    pause = false,
    gameover = false,
    currentScene = 0,
    scenes = [],
    mainScene = null,
    gameScene = null,
    highscoresScene = null,
    body = [],
    food = null,
    bonus = null, // Bonus object
    //var wall = [],
    highscores = [],
    posHighscore = 10,
    dir = 0,
    score = 0,
    showRequestStatus = false, // Display HTTP request result
    showBonus = false, // Display bonus in screen
    iBody = new Image(),
    iFood = new Image(),
    iBonus = new Image(), // Bonus img
    aEat = new Audio(),
    aDie = new Audio();

  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 17);
      }
    );
  })();

  document.addEventListener(
    "keydown",
    function (evt) {
      if (evt.which >= 37 && evt.which <= 40) {
        evt.preventDefault();
      }

      lastPress = evt.which;
    },
    false
  );

  function Rectangle(x, y, width, height) {
    this.x = x === undefined ? 0 : x;
    this.y = y === undefined ? 0 : y;
    this.width = width === undefined ? 0 : width;
    this.height = height === undefined ? this.width : height;
  }

  Rectangle.prototype = {
    constructor: Rectangle,

    intersects: function (rect) {
      if (rect === undefined) {
        window.console.warn("Missing parameters on function intersects");
      } else {
        return (
          this.x < rect.x + rect.width &&
          this.x + this.width > rect.x &&
          this.y < rect.y + rect.height &&
          this.y + this.height > rect.y
        );
      }
    },

    fill: function (ctx) {
      if (ctx === undefined) {
        window.console.warn("Missing parameters on function fill");
      } else {
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    },

    drawImage: function (ctx, img) {
      if (img === undefined) {
        window.console.warn("Missing parameters on function drawImage");
      } else {
        if (img.width) {
          ctx.drawImage(img, this.x, this.y);
        } else {
          ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
      }
    },
  };

  function Scene() {
    this.id = scenes.length;
    scenes.push(this);
  }

  Scene.prototype = {
    constructor: Scene,
    load: function () {},
    paint: function (ctx) {},
    act: function () {},
  };

  function loadScene(scene) {
    currentScene = scene.id;
    scenes[currentScene].load();
  }

  function random(max) {
    return ~~(Math.random() * max);
  }

  function addHighscore(score) {
    posHighscore = 0;
    while (
      highscores[posHighscore] > score &&
      posHighscore < highscores.length
    ) {
      posHighscore += 1;
    }
    highscores.splice(posHighscore, 0, score);
    if (highscores.length > 10) {
      highscores.length = 10;
    }
    localStorage.highscores = highscores.join(",");
  }

  function repaint() {
    window.requestAnimationFrame(repaint);
    if (scenes.length) {
      scenes[currentScene].paint(ctx);
    }
  }

  function run() {
    setTimeout(run, 50);
    if (scenes.length) {
      scenes[currentScene].act();
    }
  }

  function init() {
    // Get canvas and context
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // Load assets
    iBody.src = "assets/body.png";
    iFood.src = "assets/fruit.png";
    iBonus.src = "assets/bonus.png";
    aEat.src = "assets/chomp.oga";
    aDie.src = "assets/dies.oga";

    // Create food
    food = new Rectangle(80, 80, 10, 10);

    // Create Bonus
    bonus = new Rectangle(0, 0, 10, 10);
    showHideBonus(); // Start showing bonus randomly

    // Create walls
    //wall.push(new Rectangle(50, 50, 10, 10));
    //wall.push(new Rectangle(50, 100, 10, 10));

    //wall.push(new Rectangle(100, 50, 10, 10));
    //wall.push(new Rectangle(100, 100, 10, 10));

    // Load saved highscores
    if (localStorage.highscores) {
      highscores = localStorage.highscores.split(",");
    }

    // Start game
    run();
    repaint();
  }

  // Bonus Handler
  function showHideBonus() {
    setTimeout(
      function () {
        showBonus = !showBonus;
        bonus.x = random(canvas.width / 10 - 1) * 10;
        bonus.y = random(canvas.height / 10 - 1) * 10;
        showHideBonus();
      },
      showBonus
        ? // Show between 2 and 4 seconds
          Math.max(2000, random(4000))
        : // Wait between 2 and 7 seconds to show again
          Math.max(2000, random(7000))
    );
  }

  // Main Scene
  mainScene = new Scene();

  mainScene.paint = function (ctx) {
    // Clean canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw title
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("RADIUM SNAKE", 150, 60);
    ctx.fillText("Press Enter", 150, 90);
  };

  mainScene.act = function () {
    // Load next scene
    if (lastPress === KEY_ENTER) {
      loadScene(highscoresScene);
      lastPress = null;
    }
  };

  // Game Scene
  gameScene = new Scene();

  gameScene.load = function () {
    score = 0;
    dir = 1;
    body.length = 0;
    body.push(new Rectangle(40, 40, 10, 10));
    body.push(new Rectangle(0, 0, 10, 10));
    body.push(new Rectangle(0, 0, 10, 10));
    food.x = random(canvas.width / 10 - 1) * 10;
    food.y = random(canvas.height / 10 - 1) * 10;
    gameover = false;
  };

  gameScene.paint = function (ctx) {
    var i = 0,
      l = 0;

    // Clean canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.strokeStyle = "#fff";
    for (i = 0, l = body.length; i < l; i += 1) {
      body[i].drawImage(ctx, iBody);
    }

    // Draw walls
    //ctx.fillStyle = '#999';
    //for (i = 0, l = wall.length; i < l; i += 1) {
    //    wall[i].fill(ctx);
    //}

    // Draw food
    // ctx.strokeStyle = "#f00";
    food.drawImage(ctx, iFood);

    // Draw Bonus if available
    if (showBonus) bonus.drawImage(ctx, iBonus);

    // Draw score
    ctx.fillStyle = "#fff";
    ctx.textAlign = "right";
    ctx.fillText("Score: " + score, canvas.width - 10, 10);

    // Draw Update
    if (showRequestStatus) {
      ctx.textAlign = "right";
      ctx.fillText(showRequestStatus, canvas.width - 10, canvas.height - 10);
    }
    ctx.textAlign = "left";

    // Debug last key pressed
    //ctx.fillText('Last Press: '+lastPress,0,20);

    // Draw pause
    if (pause) {
      ctx.textAlign = "center";
      if (gameover) {
        ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);
      } else {
        ctx.fillText("PAUSE", canvas.width/2, canvas.height/2);
      }
    }
  };

  gameScene.act = function () {
    var i = 0,
      l = 0;

    if (!pause) {
      // GameOver Reset
      if (gameover) {
        loadScene(highscoresScene);
      }

      // Move Body
      for (i = body.length - 1; i > 0; i -= 1) {
        body[i].x = body[i - 1].x;
        body[i].y = body[i - 1].y;
      }

      // Change Direction
      if (lastPress === KEY_UP && dir !== 2) {
        dir = 0;
      }
      if (lastPress === KEY_RIGHT && dir !== 3) {
        dir = 1;
      }
      if (lastPress === KEY_DOWN && dir !== 0) {
        dir = 2;
      }
      if (lastPress === KEY_LEFT && dir !== 1) {
        dir = 3;
      }

      // Move Head
      if (dir === 0) {
        body[0].y -= 10;
      }
      if (dir === 1) {
        body[0].x += 10;
      }
      if (dir === 2) {
        body[0].y += 10;
      }
      if (dir === 3) {
        body[0].x -= 10;
      }

      // Out Screen
      if (body[0].x > canvas.width - body[0].width) {
        body[0].x = 0;
      }
      if (body[0].y > canvas.height - body[0].height) {
        body[0].y = 0;
      }
      if (body[0].x < 0) {
        body[0].x = canvas.width - body[0].width;
      }
      if (body[0].y < 0) {
        body[0].y = canvas.height - body[0].height;
      }

      // Food Intersects
      if (body[0].intersects(food)) {
        body.push(new Rectangle(-10, -10, 10, 10));
        score += 1;
        food.x = random(canvas.width / 10 - 1) * 10;
        food.y = random(canvas.height / 10 - 1) * 10;
        aEat.play();
      }

      // Bonus Intersects
      if (body[0].intersects(bonus) && showBonus) {
        showBonus = false;
        score += 5;
        sendScore(score);
        aEat.play();
        // food.x = random(canvas.width / 10 - 1) * 10;
        // food.y = random(canvas.height / 10 - 1) * 10;
      }

      // Wall Intersects
      //for (i = 0, l = wall.length; i < l; i += 1) {
      //    if (food.intersects(wall[i])) {
      //        food.x = random(canvas.width / 10 - 1) * 10;
      //        food.y = random(canvas.height / 10 - 1) * 10;
      //    }
      //
      //    if (body[0].intersects(wall[i])) {
      //        gameover = true;
      //        pause = true;
      //    }
      //}

      // Body Intersects
      for (i = 2, l = body.length; i < l; i += 1) {
        if (body[0].intersects(body[i])) {
          gameover = true;
          pause = true;
          aDie.play();
          addHighscore(score);
        }
      }
    }
    // Pause/Unpause
    if (lastPress === KEY_ENTER) {
      pause = !pause;
      lastPress = null;
    }
  };

  // Highscore Scene
  highscoresScene = new Scene();

  highscoresScene.paint = function (ctx) {
    var i = 0,
      l = 0;

    // Clean canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw title
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("HIGH SCORES", 150, 30);

    // Draw high scores
    ctx.textAlign = "right";
    for (i = 0, l = highscores.length; i < l; i += 1) {
      if (i === posHighscore) {
        ctx.fillText("*" + highscores[i], 180, 40 + i * 10);
      } else {
        ctx.fillText(highscores[i], 180, 40 + i * 10);
      }
    }
  };

  highscoresScene.act = function () {
    // Load next scene
    if (lastPress === KEY_ENTER) {
      loadScene(gameScene);
      lastPress = null;
    }
  };

  window.addEventListener("load", init, false);

  // Send HTTP request with score
  async function sendScore(score) {
    try {
      const request = await fetch(
        `https://www.jsonplaceholder.com/?score=${score}`
      );
      const response = await request.json();
      if (!response.ok) throw new Error("Error in HTTP request.");

      // Success!
      showRequestStatus = "Score Updated!";
    } catch (e) {
      // Failure !!
      showRequestStatus = "Score update failure :(";
    } finally {
      setTimeout(() => {
        showRequestStatus = false;
      }, 800);
    }
  }
})(window);
