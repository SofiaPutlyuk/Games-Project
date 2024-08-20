const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];
const button19th = document.querySelector('.container-scientists__19th');
const allWrappers = document.querySelectorAll('.wrapper');
console.log(allWrappers)
const a = allWrappers.forEach(element => {
const createText = document.createElement
    
 })




const buttonAlphabet = document.querySelector('.container-scientists__alphabet');
console.log(buttonAlphabet);

const buttonAge = document.querySelector('.container-scientists__age');
console.log(buttonAge);

const buttonBornRecent = document.querySelector('.container-scientists__born-recent');
console.log(buttonBornRecent);

const buttonAgeAlbertEinstein = document.querySelector('.container-scientists__age-albert-einstein');
console.log(buttonAgeAlbertEinstein);

const buttonStartC = document.querySelector('.container-scientists__start-c');
console.log(buttonStartC);

const buttonStartA = document.querySelector('.container-scientists__start-a');
console.log(buttonStartA);

const buttonLived = document.querySelector('.container-scientists__lived');
console.log(buttonLived);

const buttonName = document.querySelector('.container-scientists__name');
console.log(buttonName);


/*Вчені народженні 19ст */
const searchBornNineteens = (scientists) => {
    return scientists.filter(scientist => {
        const birthYear = scientist.born;
        return birthYear >= 1801 && birthYear <= 1900;
    });
};

const searchYear19th = searchBornNineteens(scientists);
console.log(searchYear19th);
//Сортування за алфавітом
const searchName = scientists.sort((a, b) => a.name.localeCompare(b.name))
console.log(searchName)
searchName.forEach(element => {
    console.log(element.name)
})
//Знайти суму років, скільки прожили всі вчені
const totalYearsLived = scientists.reduce((total, scientist) => total + (scientist.dead - scientist.born), 0);
console.log(totalYearsLived)
// Знайти вченого, який народився найпізніше
const latestBorn = [...scientists].sort((a, b) => b.born - a.born)[0];
console.log(latestBorn);
// Знайти рік народження Albert Einstein
const albertEinstein = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein");
//Знайти вчених, прізвища яких починаються на літеру “С”
const surnamesStartingWithC = scientists.filter(scientist => scientist.surname.startsWith('C'));
//Видалити всіх вчених, ім’я яких починається на “А”
const withoutNameStartingWithA = scientists.filter(scientist => !scientist.name.startsWith('A'));
//Знайти вченого, який прожив найдовше і вченого, який прожив найменше
const minMaxLived = scientists.reduce((acc, scientist) => {
    const yearsLived = scientist.dead - scientist.born;
    if (yearsLived > acc.max.years) {
      acc.max = { scientist, years: yearsLived };
    }
    if (yearsLived < acc.min.years) {
      acc.min = { scientist, years: yearsLived };
    }
  
    return acc;
  }, { min: { scientist: null, years: Infinity }, max: { scientist: null, years: -Infinity } });
  console.log(minMaxLived)
//Знайти вчених, в яких співпадають перші літери імені і прізвища
const matchingInitials = scientists.filter(scientist => scientist.name[0] === scientist.surname[0]);
