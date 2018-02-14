window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z', '?', "!"];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;           // Word getHint
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'
  var wins = 0               // wins stored
  var losses = 0             // losses stored

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showWins = document.getElementById("wins");
  var showLosses = document.getElementById("losses");
  



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
      // wins.push(wins);
      // losses.push(losses);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) { // the event of losing
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  // Show wins and losses
   comments = function () {
    showWins.innerHTML = wins;
    if (lives < 1) { // the event of losing
      showLosses.innerHTML = losses;
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showWins.innerHTML = wins;
      }
    }
  }

      // Animate man
  //var animate = function () {
    //var drawMe = lives ;
   // drawArray[drawMe]();
  //}    

  // OnClick Function
   check = function () {
      
      list.onclick = function () {
        if (lives > 0 ) {
        var guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === guess) {
            guesses[i].innerHTML = guess;
            counter += 1;
          } 
        }
        var j = (word.indexOf(guess));
        if (j === -1) {
          lives -= 1;
          comments();
          //animate();
        } else {
          comments();
        }
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [
        ["coffee", "demonstration", "javascript", "dragonfly", "the croods", "peaky blinders", "deadwood", 
        "fullmetal alchemist", "wreck-it ralph", "v for vendetta", "tea", "hello world", "word", "hangman", "html", 
        "css", "mirror", "api", "jquery", "coding", "more words", "having fun?", "mazel tov!", "cars", "hellboy", "oldboy"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    // wins = [ ];
    // losses = [ ];
    result();
    comments();
    //selectCat();
    //canvas();
  }



  play();
  
  

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    //context.clearRect(0, 0, 400, 400);
    play();
  }
}


