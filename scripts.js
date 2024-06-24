//elements
const citySelect = document.getElementById('city-select');
const statisticsContainer = document.getElementById('statistics');

//event listeners
citySelect.addEventListener('change', () => {
  const selectedCity = citySelect.value;
  statisticsContainer.classList.add('statistics');
  fetchDetails(selectedCity);
});

//functions
const fetchDetails = (city) => {
  fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      'https://ommu1982.pythonanywhere.com/static/boligprisstatistikk.json'
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      const stats = JSON.parse(data.contents)[city];
      statisticsContainer.innerHTML = formatStatistics(stats);
    });
};

const formatStatistics = (stats) => {
  let html = '';
  for (const stat in stats) {
    html += `
      <div class="stat-item">
        <span class="stat-label">${stat}:</span>
        <span class="stat-value">${stats[stat]}</span>
      </div>`;
  }
  return html;
};
