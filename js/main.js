// object constructor
function Skateboard(name, cost, size, stock, image) {
  this.name = name
  this.cost = cost
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
