// Polymorphism is a object that is able to take multiple forms via inheritance
// ie. An Animal class that can be extended into different species eg. Horse / Eagle / Dolpin
// So a general .move function becomes differentiated into canter / fly / swim

class Animal {
  move(){
    console.log("The animal moves")
  }
  sleep(){
    console.log("It goes to sleep")
  }
}

class Horse extends Animal {
  move(){
    console.log("The horse canters")
  }
}

class Eagle extends Animal {
  move(){
    console.log("The eagle flies")
  }
}

class Dolpin extends Animal {
  move(){
    console.log("The dolpin swims")
  }
  sleep(){
    console.log("half of the dolphins brain goes to sleep")
  }
}

const animal = new Animal;
animal.move()
animal.sleep()

const horse = new Horse;
horse.move()
horse.sleep()