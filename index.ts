document?.getElementById('addButton')?.addEventListener('click', addInput);
function addInput() {
  const cityNameInput = document.getElementById('cityName') as HTMLInputElement;
  const countryInput = document.getElementById('country') as HTMLInputElement;
  const populationInput = document.getElementById('population') as HTMLInputElement;

  const cityName = cityNameInput.value;
  const country = countryInput.value;
  const population = populationInput.value;

  const outputDiv = document.getElementById('output');

  const p = document.createElement('p');
  p.textContent = `City: ${cityName}, Country: ${country}, Population: ${population}`;
  outputDiv?.appendChild(p);

  // Clear input fields after adding
  cityNameInput.value = '';
  countryInput.value = '';
  populationInput.value = '';
}