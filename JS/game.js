const readLine = require('readline');

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(){
    this.towers = [[3,2,1],[],[]];
  }

  promptMove(cb) {
    this.print();
    let startTowerIdx;
    let endTowerIdx;
    reader.question("Choose a tower to move a disc from: ", (answer)=>{
       startTowerIdx = parseInt(answer) - 1;
      reader.question("Choose a tower to move to: ", (answer)=>{
        endTowerIdx = parseInt(answer) - 1;
        cb(startTowerIdx, endTowerIdx);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let startTower = this.towers[startTowerIdx];
    let endTower = this.towers[endTowerIdx];

    if(startTower.length === 0){
      return false;
    } else if (endTower.length === 0){
      return true;
    } else if (startTower[startTower.length - 1] > endTower[endTower.length - 1]) {
      return false;
    } else{
      return true;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)){
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    } else {
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    const towerOne = this.towers[0]
    const towerTwo = this.towers[1]
    const towerThree = this.towers[2]

    if(towerOne.length > 0){
      return false;
    } else if (towerTwo.length === 3){
      return true;
    } else if (towerThree.length === 3){
      return true;
    } else {
      return false;
    }
  }


  // still need to work on finishing this method.
  run(completionCallback) {
    this.promptMove(this.move)
  }

}

const g = new Game();
g.run();
