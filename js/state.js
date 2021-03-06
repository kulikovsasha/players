function getRandomString(length) {
  let randomChars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function getRandomNumber(min, max) {
    let result;
    result = Math.random() * (max - min) + min;
    return Math.floor(result);
}

class Player {
  constructor() {
    this.name = getRandomString(5);
    this.params = {
      height: getRandomNumber(160, 210),
      weight: getRandomNumber(70, 150),
    };
  }
}

let state = [];

for(let i = 0; i < 50; i++){
    state.push(new Player())
}


export default state;
