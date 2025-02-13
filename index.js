const flight = {
  id: "145c01af48dd00002715248e_0",
  dTimeUTC: "01/26/2021 @ 1:25pm (UTC)",
  aTimeUTC: "01/26/2021 @ 3:45pm (UTC)",
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: "2h 20m",
  flyFrom: "PRG",
  cityFrom: "Prague",
  cityCodeFrom: "PRG",
  countryFrom: {
    code: "CZ",
    name: "Czechia",
  },
  flyTo: "BCN",
  cityTo: "Barcelona",
  cityCodeTo: "BCN",
  countryTo: {
    code: "ES",
    name: "Spain",
  },
  distance: 1359.54,
  airline: "FR",
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};

const handBagLimit = {
  hand_width: 20,
  hand_height: 40,
  hand_length: 55,
  hand_weight: 10,
  
};
const secondBag = Math.round(flight.bags_price[2] * flight.conversion.EUR) + 'Kč';


document.body.innerHTML += `
    <h1>Let PRG - BCN</h1>
    <h2>Maximální povolené rozměry příručního zavazadla:</h2>
    <p>Šířka: ${handBagLimit.hand_width} cm </p>
    <p>Výška: ${handBagLimit.hand_height} cm </p>
    <p>Délka: ${handBagLimit.hand_length} cm </p>
    <p>Váha: ${handBagLimit.hand_weight} kg </p>
    <h3> Cena druhého zavazadla: ${secondBag} <h/3>
`;



