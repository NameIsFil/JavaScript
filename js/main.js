// Zad 1
function greet(name, lastName) {
  console.log('Hi, ' + name + ' ' + lastName + ". What's up?")
}

greet('John', 'Smith')

// Zad 2
function getCircleArea(radius) {
  return Math.PI * radius * radius;
}

getCircleArea(5)

// Zad 3
function getCircleRadius(circleArea) {
  return (Math.sqrt(circleArea / Math.PI))
}

getCircleRadius(12)


// Zad 4
function getCirclesAreaSum(firstRadius, secondRadius) {
  return (Math.PI * firstRadius * firstRadius) + (Math.PI * secondRadius * secondRadius)
}

getCirclesAreaSum(5, 10)


//Zad 5
function quarter(month) {
  if (month <= 3) {
    console.log(1)
  }

  else if (month <= 6) {
    console.log(2)
  }

  else if (month <= 9) {
    console.log(3)
  }

  else if (month <= 12) {
    console.log(4)
  }
}

quarter(numer od 1-12)


