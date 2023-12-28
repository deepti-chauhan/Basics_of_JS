class Animal {
  constructor(name, animalType, animalSound) {
    this.name = name
    this.animalType = animalType
    this.animalSound = animalSound
  }

  sound() {
    console.log(
      `${this.name} is a ${this.animalType} and it makes ${this.animalSound} sound.`
    )
  }
}

const animal = new Animal('alice', 'dog', 'bark')
animal.sound()


class Bird extends Animal{
    constructor(name, animalType, animalSound, animalSpeed){
        super(name, animalType, animalSound)
        this.animalSpeed = animalSpeed
    }


    fly(){
        console.log(`${this.name} is a ${this.animalType} and it flyies with a speed of ${this.animalSpeed}`)
    }
}

const newBird = new Bird('pepe', 'bird', 'chirp', '30kmph')
newBird.sound()
newBird.fly()
