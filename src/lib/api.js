const GET_ALL_COUNTRIES = "https://restcountries.com/v3.1";

export async function getAllCountries() {
  const response = await fetch(`${GET_ALL_COUNTRIES}/all`);
  const allCountriesData = await response.json();

  if (!response.ok) {
    throw new Error(allCountriesData.message || "Could not fetch countries.");
  }

  return allCountriesData;
}

export async function getSingleCountry(name) {
  const response = await fetch(
    `${GET_ALL_COUNTRIES}/name/${name}?fullText=true`
  );
  const countryData = await response.json();

  if (!response.ok) {
    throw new Error(countryData.message || "Could not fetch country.");
  }

  return countryData;
}

export async function getCountryWithRegion(region) {
  const response = await fetch(`${GET_ALL_COUNTRIES}/region/${region}`);
  const countryData = await response.json();

  if (!response.ok) {
    throw new Error(countryData.message || "Could not fetch countries.");
  }

  return countryData;
}

export async function getCountryWithCodes(codes) {
  const response = await fetch(`${GET_ALL_COUNTRIES}/alpha?codes=${codes}`);
  const countryData = await response.json();

  if (!response.ok) {
    throw new Error(countryData.message || "Could not fetch countries.");
  }

  return countryData;
}
