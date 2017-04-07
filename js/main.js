// object constructor
function Skateboard(name, price, size, stock, image) {
  this.name = name
  this.price = price
  this.size = size
  this.stock = stock
  this.image = image
}

// create new objects from the constructor
var cruzade = new Skateboard("Cruzade", "$79.99", '27" x 7.5"', 2, "img/cruzade.png")
var libsky = new Skateboard("Lib-Sky", "$69.99", '30" x 8"', 3, "img/libsky.png")
var macdre = new Skateboard("Mac Dre", "$59.99", '28" x 7.5"', 4, "img/macdre.png")
var sf = new Skateboard("SF", "$49.99", '30" x 7.5"', 2, "img/sfskate.png")
var crack = new Skateboard("Straight Crack", "$199.99", '30" x 7.5"', 2, "img/straightcrack.png")

// create an array to add ojects to
var skateboardArray = new Array

// add objects to array of objects
skateboardArray.push(cruzade, libsky, macdre, sf, crack)

// loop through object array
for (var i = 0; i < skateboardArray.length; i++) {
  // create new elements for each object
  var newItem = document.createElement("div")
  var newDiv = document.createElement("div")
  // var newDiv2 = document.createElement("div")
  var nameH1 = document.createElement("h1")
  var sizeH4 = document.createElement("h4")
  var priceH4 = document.createElement("h4")
  var stockH4 = document.createElement("h4")
  var btn = document.createElement("button")
  var image = document.createElement("img")

  // create text for new elements
  var skateName = document.createTextNode(skateboardArray[i].name)
  var skatePrice = document.createTextNode("Price: " + skateboardArray[i].price)
  var skateSize = document.createTextNode("Size: " + skateboardArray[i].size)
  var skateStock = document.createTextNode("Stock " + skateboardArray[i].stock)
  var skateButton = document.createTextNode("Purchase!")

  // update source attribute
  image.src = skateboardArray[i].image

  // update class attributes
  image.className = "img-responsive"
  btn.className = "btn btn-primary"
  newItem.className = "row justify-content-center"
  newDiv.className = "col-xs-4"
  // newDiv2.className = "col-xs-4"
  nameH1.className = "display-2"


  // add text to elements
  nameH1.appendChild(skateName)
  priceH4.appendChild(skatePrice)
  sizeH4.appendChild(skateSize)
  stockH4.appendChild(skateStock)
  btn.appendChild(skateButton)

  // add elements to new div
  newDiv.appendChild(nameH1)
  newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

  // add new div to new item div
  newItem.appendChild(newDiv)

  // add new item to the element with id="skateboard"
  document.getElementById("products").appendChild(newItem)
}
