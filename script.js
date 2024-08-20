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
const buttonAlphabet = document.querySelector('.container-scientists__alphabet');
const buttonAge = document.querySelector('.container-scientists__age');
const buttonBornRecent = document.querySelector('.container-scientists__born-recent');
const buttonAgeAlbertEinstein = document.querySelector('.container-scientists__age-albert-einstein');
const buttonStartC = document.querySelector('.container-scientists__start-c');
const buttonStartA = document.querySelector('.container-scientists__start-a');
const buttonLived = document.querySelector('.container-scientists__lived');
const buttonName = document.querySelector('.container-scientists__name');

const wrappers = document.querySelectorAll('.wrapper');

function clearWrappers() {
    wrappers.forEach(wrapper => wrapper.innerHTML = '');
}

function displayResults(results) {
    clearWrappers();
    results.forEach((result, index) => {
        if (wrappers[index]) {
            const div = document.createElement('div');
            div.className = 'result-box';
            div.classList.add('text')
            div.innerHTML = `
                <h3>${result.name} ${result.surname}</h3>
                <p>Born: ${result.born}</p>
                <p>Dead: ${result.dead}</p>
                <p>Lived: ${result.dead - result.born} years</p>
            `;

            wrappers[index].appendChild(div);
        }
    });
}

button19th.addEventListener('click', () => {
    const results = scientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900);
    displayResults(results);
});

buttonAlphabet.addEventListener('click', () => {
    const results = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
    displayResults(results);
});

buttonAge.addEventListener('click', () => {
    const results = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
    displayResults(results);
});

buttonBornRecent.addEventListener('click', () => {
    const result = [...scientists].sort((a, b) => b.born - a.born)[0];
    displayResults([result]);
});

buttonAgeAlbertEinstein.addEventListener('click', () => {
    const result = scientists.find(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein');
    displayResults([result]);
});

buttonStartC.addEventListener('click', () => {
    const results = scientists.filter(scientist => scientist.surname.startsWith('C'));
    displayResults(results);
});

buttonStartA.addEventListener('click', () => {
    const results = scientists.filter(scientist => !scientist.name.startsWith('A'));
    displayResults(results);
});

buttonLived.addEventListener('click', () => {
    const sorted = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
    const result = [
        sorted[0], 
        sorted[sorted.length - 1] 
    ];
    displayResults(result);
});

buttonName.addEventListener('click', () => {
    const results = scientists.filter(scientist => scientist.name[0] === scientist.surname[0]);
    displayResults(results);
});
