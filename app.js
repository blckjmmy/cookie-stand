'use strict'

// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
//23	65	6.3


  
const wrkhr = ['6am', '7am','8am','9am', '10am', '11am', '12', '1pm', '2pm','3pm', '4pm', '5pm', '6pm','7pm']



const store1 = {
  Location: 'Seattle',
  Mincust: 23,
  Maxcust: 65,
  cookiesle: 6.3,
  hourSales: [],
}


const store2 = {
  Location: 'Tokyo',
  Mincust: 3,
  Maxcust: 24,
  cookiesle: 1.2,
  hourSales: [],
}


const store3 = {
  Location: 'Dubai',
  Mincust: 11,
  Maxcust: 38,
  cookiesle: 3.7,
  hourSales: [],
}


// Paris	20	38	2.3
const store4 = {
  Location: 'Paris',
  Mincust: 20,
  Maxcust: 38,
  cookiesle: 2.3,
  hourSales: [],
}


// Lima	2	16	4.6
const store5 = {
  Location: 'Lima',
  Mincust: 2,
  Maxcust: 16,
  cookiesle: 4.6,
  hourSales: [],
  
}

function getRandomCust(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function hourSales(avgSale, randomCust) {
  return Math.floor(avgSale * randomCust)
}

function eachHour(object) {
  for (let i = 0; i < hoursOfOpp.length; i++) {
    let randomNum = getRandomCust(object.minCust, object.maxCust);
    let sales = hourSales(object.avgSale, randomNum);
    object.hourSales.push(sales);
  
    
  }

}

function getRandom(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function hourSales(avgSale, randomCust) {
  return Math.floor(avgSale * randomCust)
}

function eachHour(object) {
  for (let i = 0; i < wrkhr.length; i++) {
    let randomNum = getRandomCust(object.minCust, object.maxCust);       let sales = hourSales(object.avgSale, randomNum);
  object.hourSales.push(sales);
  }


}


