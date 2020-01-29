//CREATION D'UNE CONSTANTE - TABLEAU DE VILLES
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro']
console.log(citiesId)
//citiesId = []
const count = citiesId.push('tokyo')
//console.log('Nombre de cases : ' + count)
console.log(citiesId)

//CREATION D'UNE VARIABLE - VILLE FAVORITE
let favoriteCityId = 'rome'
console.log(favoriteCityId)
favoriteCityId = 'paris'
console.log(favoriteCityId)

//CREATION D'UN OBJET METEO
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };

}
const weather = getWeather(favoriteCityId)
console.log(weather)

const {
    city: nomVille,
    temperature: temperatureambiante
} = weather;

console.log(nomVille)
console.log(temperatureambiante)

const [val1, val2, ...valeursRestantes] = citiesId;
console.log(val1)
console.log(val2)
console.log(valeursRestantes.length)

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl

    }

    get price() {
        return this._price
    }

    set price(newPrice) {
        this._price = newPrice
    }

    toString() {
        return 'Trip [' + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + ']';
    }
    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg', '')
    }
}

var price = `price`


const parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')
console.log(parisTrip)
console.log(parisTrip.name)
parisTrip.price = 100;

console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString())

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl)
        this.price = 0

    }
    
}
const freeTrip = new FreeTrip ('nantes', 'Nantes', 'img/nantes.jpg', price)
console.log(freeTrip.toString())