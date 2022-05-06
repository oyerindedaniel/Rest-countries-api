import { Fragment, useState } from "react";

import QuerySearchedCountries from "../filterSearchCountries/QuerySearchedCountries";

import icons from "../../svg/sprite.svg";

const SearchCountries = (props) => {
  const [searchCountries, setSearchCountries] = useState();
  const { allCountries } = props;

  const searchedItemHandler = (e) => {
    e.preventDefault();
    const valueSearch = e.target.value.toLowerCase();
    const arraySearchedCountries = [];

    allCountries.forEach((country) => {
      if (!valueSearch) return;
      const foundCountry = country.countryName.startsWith(valueSearch);
      if (foundCountry) arraySearchedCountries.push(country);
    });

    setSearchCountries(arraySearchedCountries);
  };

  let searchCountriesData;
  if (searchCountries) {
    searchCountriesData = (
      <div class="overflow-scrollbar absolute top-14 left-0 max-h-40 w-full z-50 overflow-auto bg-white shadow-md">
        {searchCountries.map((country) => (
          <QuerySearchedCountries
            key={country.key}
            countryName={country.countryName}
            image={country.image}
            population={country.population}
          />
        ))}
      </div>
    );
  }

  return (
    <div class="relative">
      <div class="flex self-start justify-between items-center bg-white dark:bg-darkEle pl-5 pr-2 py-2 rounded-t shadow-md sm:justify-start vsm:justify-start sm:mb-3 vsm:mb-3">
        <span>
          <svg class="h-5 w-5 mr-3 stroke-lightInput fill-lightInput dark:stroke-white dark:fill-white">
            <use xlinkHref={`${icons}#icon-search`}></use>
          </svg>
        </span>
        <form onSubmit={searchedItemHandler} class="">
          <input
            class="py-1 px-1 w-96 bg-white dark:bg-darkEle  dark:placeholder:text-white dark:focus:text-white dark:text-white vsm:w-full"
            type="text"
            placeholder="Search for a country ..."
            onChange={searchedItemHandler}
          />
        </form>
      </div>
      <Fragment>{searchCountries && searchCountriesData}</Fragment>
    </div>
  );
};

export default SearchCountries;
