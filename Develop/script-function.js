// Function to get array of random numbers 

function getRandom(max) {
    var random = Math.floor(Math.random()* max);
    return random;
    // var random = Math.random() * max;
    // return Math.floor(random) + 1;
  }
  
  function generate () {
    var password = [];
      for(var i = 0; i < 5; i++) {
        var random = getRandom(94)
        password.push(random)
      }
    return password;
  }
  console.log(generate());