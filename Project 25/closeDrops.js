class CloseRain extends BaseClass{
  constructor(x, y, width, height) {
    super(random(10, 770), y, width, height);
    }

    fall() {
      var grav = 5;

      this.y = this.y + grav;

      
      this.y = random(-200, -100);
    } 

    display(){
      super.display();
    }

    
}