class ComputerArcher {

  constructor(x, y, width, height){

      var computerArcherOptions = {

          isStatic : true

      }

      this.body = Bodies.rectangle(x, y, width, height, computerArcherOptions);
      Matter.Body.setAngle(this.body, PI / 2);
      this.width = width;
      this.height = height;
      this.image = loadImage("assets/computerArcher.png");
      World.add(world, this.body);

  }

  display(){

      var pos = this.body.position;
      var angle = this.body.angle;

      push ();
      translate (pos.x, pos.y);
      rotate (angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop ();

  }

}