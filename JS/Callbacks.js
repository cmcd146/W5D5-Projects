class Clock {
  constructor() {
    let current_time = new Date();
    this.hour = current_time.getHours();
    this.minute = current_time.getMinutes();
    this.second = current_time.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this),1000);
  }

  printTime(){
    console.log(`${this.hour}:${this.minute}:${this.second}`)
  }


  _tick() {
    this.second += 1;
    if (this.second === 60){
      this.minute += 1;
      this.second = 0;
      if(this.minute === 60){
        this.hour += 1;
        this.minute = 0;
        if(this.hour === 13){
          this.hour = 1;
        }
      }
    }
    this.printTime();
  }

}
// const clock = new Clock();
const readLine = require('readline');

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Give me the number, seee: ", function(answer){
      let num = parseInt(answer);
      sum += num;
      console.log(sum + " is the current sum.")
      addNumbers(sum, numsLeft - 1, completionCallback)
    })
  }else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
