import { Fragment, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getAllCountries, getCountryWithRegion } from "../lib/api";

import FilterCountries from "../components/countries/FilterCountries";
import SearchCountries from "../components/countries/SearchCountries";
import CountriesItems from "../components/countries/CountriesItems";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Countries = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const filterRegion = queryParams.get("region");

  const condition = filterRegion ? getCountryWithRegion : getAllCountries;

  const {
    sendRequest,
    status,
    data: loadedCountries,
    error,
  } = useHttp(condition, true);

  useEffect(() => {
    if (filterRegion) sendRequest(filterRegion);
    if (!filterRegion) sendRequest();
  }, [sendRequest, filterRegion]);

  const updateCountriesFn = (valueFilter) => {
    const regionValue = valueFilter;
    if (regionValue) {
      const queryURL = `/countries?region=${regionValue}`;
      navigate(queryURL);
    }

    if (!regionValue) {
      const queryURL = `/countries`;
      navigate(queryURL);
    }
  };

  const pending = <LoadingSpinner />;

  const errorCheck = <p className="centered">{error}</p>;

  const countriesItems = <CountriesItems allCountries={loadedCountries} />;

  return (
    <Fragment>
      <div class="flex justify-between sm:flex-col vsm:flex-col">
        {loadedCountries && <SearchCountries allCountries={loadedCountries} />}
        {loadedCountries && (
          <FilterCountries onFilterByRegionHandler={updateCountriesFn} />
        )}
      </div>
      {status === "pending" && (
        <div class="centered mt-5 dark:text-white">{pending}</div>
      )}
      {error && <div class="mt-5 dark:text-white"> {errorCheck} </div>}
      {loadedCountries && <div class="mt-11">{countriesItems}</div>}
    </Fragment>
  );
};

export default Countries;
