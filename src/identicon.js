class Identicon {
  constructor(string) {
    this.string = string;
    this.array = this.getHashedArr(string).map(e => e > 127);
    this.color = this.getHashedArr(string).slice(0, 3);
    this.blockColor = `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`;
  }

  getHashedArr() {
    return md5.array(this.string);
  }

  makeGrid() {
    let arrayCounter = 0;
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 3; y++) {
        if (this.array[arrayCounter]) {
          document.getElementById(`${x}-${y}`).style.backgroundColor = this.blockColor;
          if (y === 0) {
            document.getElementById(`${x}-${4}`).style.backgroundColor = this.blockColor;
          } else if (y === 1) {
            document.getElementById(`${x}-${3}`).style.backgroundColor = this.blockColor;
          }
        }
        arrayCounter++;
      }
    }
  }
}
