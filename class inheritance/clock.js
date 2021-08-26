class Clock {
  constructor({ template }, elem) {
    this.template = template;
    this.elem = elem
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) "0" + mins;

    let sec = date.getSeconds();
    if (sec < 10) "0" + sec;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", sec);
    console.log(output)
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });

class ExtendetClock extends Clock{
    constructor(options){
        super(options)
        let { precision = 1000} = options
        this.precision = precision
    }
    start(){
        this.render()
        this.timer = setInterval(() => this.render(), this.precision)
    }
}

