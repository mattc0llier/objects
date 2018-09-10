const getStaticBuilding = () => {
  // return an object representing a building
  // it should 2 properties: `numberOfFloors` and `numberOfWindows`
  // numberOfFloors should have the value 5 and numberOfWindows should have the value 8
}

const getBuilding = (numberOfFloors, numberOfWindows) => {
  // function receives two parameters: numberOfFloors and numberOfWindows
  // return a building object with 2 properties: `numberOfFloors` and `numberOfFloors`
  // the values of the properties should be set from input parameters
}

const getHeight = (mountains, name) => {
  // function receives two arguments: an object called mountains and a string called name
  // mountains contains mountain names as keys and their height as values

  // return the height of the mountain specified by name
}

const getCar = () => {
  // return a new car object.
  // The car object should have one property: `speed` which should be initialised to 0
  // The car should also have two methods `faster` and `slower`
  // `faster` should increase the speed property by 10
  // `slower` should decrease the speed property by 10
}

const getLimitedCar = topSpeed => {
  // function receives one parameter, an integer called topSpeed.
  // return a new car object with 2 properties: `currentSpeed` and `topSpeed`
  // currentSpeed should be initialised to 0
  // topSpeed should be initialised to the parameter passed in

  // The car should also have two methods `faster` and `slower`
  // `faster` should increase the speed property by 10, but only up to and including topSpeed
  // `slower` should decrease the speed property by 10, but never drop below 0
}

const getAnimalNoise = (farm, animalName) => {
  // the function receives two parameters: a farm object and a string which contains an animal name
  // the farm object has methods whose names are animal names. When called they return
  // the noise that animal makes.

  // If farm object contains a method with name passed in as animalName parameter, call the method and
  // return string output by the method.
  // Otherwise, if method does not exist, return the string 'No such animal here'
}

const teaBagsLeft = teaBags => {
  // function receives an object where keys are names of tea types
  // and values are the number of teaBags we have of that type.

  // return the total number teabags we have left
}

const convertBookArrayToMap = books => {
  // the function receives an array of books where each book has an id, author, title and year

  // for example
  // {
  //   id:1,
  //   author: "Alexander Dumas",
  //   title: "The count of Monte Christo",
  //   year: 1884
  // }

  // convert the array of books into a map, where each key is a bookId and the corresponding value
  // is the object from the array

  // for example
  // {
  //   1: {
  //     id:1,
  //     author: "Alexander Dumas",
  //     title: "The count of Monte Christo",
  //     year: 1884
  //   }
  // }
}

const dogCount = dogs => {
  // function receives an array of dogs, each dog has a name and location
  // for example
  // {
  //     name: 'ruby',
  //     location: 'liverpool'
  // }

  // return an object which has locations as keys and
  // the number of dogs at that location as values
}

const dogNames = dogs => {
  // function receives an array of dogs, each dog has a name and location
  // for example
  // {
  //     name: 'ruby',
  //     location: 'liverpool'
  // }

  // return an object which has locations as keys and
  // as values an array which contains the names of the dogs
  // at that location
}

const fruitMarket = boxes => {
  // function receives an array of fruit box objects.
  // each fruit box object has a name and number of contents
  // for example
  // {
  //   contents: 'apples',
  //   number: 10
  // }

  // return an object that has contents as keys and the total for that
  // fruit in all boxes as values.
}

const averageFruitPerBox = boxes => {
  // function receives an array of fruit box objects.
  // each fruit box object has a name and number of contents
  // for example
  // {
  //   contents: 'apples',
  //   number: 10
  // }

  // return an object that has contents as keys and the average number of
  // fruit per box for that fruit type as value
}

/* STRETCH GOALS */

const calculateOrderPrice = (menu, order) => {
  // function receives two parameters: `menu` and `order`

  // menu has item names as keys and prices as values
  // order has item names as keys and quantities as values

  // calculate a total cost for each order using quantities from `order` and prices from `menu`
}


const calculateOrderPriceWithType = (menu, order, type) => {
  // function receives three parameters: `menu`, `order` and `type`

  // menu has item names as keys and prices as values
  // order has item names as keys and quantities as values
  // type is a string whose value is either `eatIn` or `takeAway`

  // calculate a total cost for each order using quantities from `order` and prices from `menu`
  // add 10% service charge for `eatIn` orders and a fixed delivery charge of 5 to `takeAway` orders
  // try to implement the service charge and delivery charge calculation without using if/else
  // hint: you can create an object with methods that calculate the charges and call the relevant one using
  // the order type provided
}

module.exports = {
  getStaticBuilding,
  getBuilding,
  getHeight,
  getCar,
  getLimitedCar,
  getAnimalNoise,
  teaBagsLeft,
  convertBookArrayToMap,
  dogCount,
  dogNames,
  fruitMarket,
  averageFruitPerBox,
  calculateOrderPrice,
  calculateOrderPriceWithType
}
