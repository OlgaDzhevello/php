
window.onload = function() { 
    let initPerson = personGenerator.getPerson();
    displayInfo(initPerson) 
};

document.querySelector('#generateBtn').addEventListener('click', function () {
    let initPerson = personGenerator.getPerson();
    displayInfo(initPerson) 
});

document.querySelector('#clearBtn').addEventListener('click', function () {
    let initPerson = {};
    initPerson.firstName = initPerson.gender = initPerson.surname = innerText 
        = initPerson.dateOfBirth = initPerson.patronymic = initPerson.profession = '';
    displayInfo(initPerson)
});

function displayInfo(initPerson) {
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#birthYearOutput').innerText = initPerson.dateOfBirth;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
}