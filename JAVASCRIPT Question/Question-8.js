// Example...1...

const person = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
    }
  };
  
  person.greet(); 
  // Output: Hello, my name is John. I am 30 years old.
  


//   Example....2.....

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.getDetails = function() {
      console.log(`This car is a ${this.brand} ${this.model}.`);
    };
  }
  
  const myCar = new Car('Toyota', 'Camry');
  myCar.getDetails();
   // Output: This car is a Toyota Camry.
  