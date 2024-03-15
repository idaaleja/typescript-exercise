"use strict";
var _a;
(_a = document === null || document === void 0 ? void 0 : document.getElementById('addButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addInput);
function addInput() {
    const cityNameInput = document.getElementById('cityName');
    const countryInput = document.getElementById('country');
    const populationInput = document.getElementById('population');
    const cityName = cityNameInput.value;
    const country = countryInput.value;
    const population = populationInput.value;
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = `City: ${cityName}, Country: ${country}, Population: ${population}`;
    outputDiv === null || outputDiv === void 0 ? void 0 : outputDiv.appendChild(p);
    // Clear input fields after adding
    cityNameInput.value = '';
    countryInput.value = '';
    populationInput.value = '';
}
