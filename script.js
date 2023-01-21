const form = document.querySelector('form');
const nwlSetup = new NLWSetup(form);
const addButton = document.querySelector('header button');

addButton.addEventListener('click', add);
form.addEventListener('change', save);

function add() {
    let today = new Date().toLocaleDateString('pt-br').slice(0, -5);

    let dayExist = nwlSetup.dayExists(today);

    if (dayExist) {
        alert('Dia já incluso!')
        return
    }

    nwlSetup.addDay(today)
}

function save() {
    localStorage.setItem('NWLSetupHabits', JSON.stringify(nwlSetup.data))
}

const data = JSON.parse(localStorage.getItem('NWLSetupHabits')) || {}

nwlSetup.setData(data)
nwlSetup.load()