import {
  RANDOM_ASTEROID_API,
  ASTEROID_DETAILS_API,
  ASTEROID_API_KEY,
} from '../utils/Constants.js';

export const getRandomAsteroids = async () => {
  const response = await fetch(RANDOM_ASTEROID_API);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  if (response.status == 200) {
    return jsonResponse;
  } else {
    return nil;
  }
};

export const getAsteroidDetails = async (asteroidId) => {
  const url = `${ASTEROID_DETAILS_API}${asteroidId}?api_key=${ASTEROID_API_KEY}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  if (response.status == 200) {
    return jsonResponse;
  } else {
    return nil;
  }
};
