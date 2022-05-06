import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import useHttp from "../../hooks/use-http";

import LoadingSpinner from "../../components/UI/LoadingSpinner";

import { getCountryWithCodes } from "../../lib/api";
import { capitalizeTheFirstLetterOfEachWord } from "../../utilities/capitalizeTheFirstLetterOfEachWord";

const EachCountryDetail = (props) => {
  const [
    {
      countryName,
      nativeName,
      population,
      region,
      subRegion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      image,
      borders,
    },
  ] = props.data;

  const checkBorders = borders ? getCountryWithCodes : "";
  const checkStrPend = borders ? true : false;

  const {
    sendRequest,
    status,
    error,
    data: loadedCountry,
  } = useHttp(checkBorders, checkStrPend);

  useEffect(() => {
    if (borders) {
      const regionCodes = borders
        .map((border) => border.toLowerCase())
        .join(",");
      sendRequest(regionCodes);
    }
  }, [sendRequest, borders]);

  const classAddMb = loadedCountry?.length > 3 ? "mb-2" : "";

  const pending = <LoadingSpinner />;

  const errorCheck = <p>{error}</p>;

  return (
    <div class="flex mt-24 md:flex-col sm:flex-col vsm:flex-col">
      <div class="flex-cont1">
        <img
          class="imageFill sm:h-auto vsm:h-auto"
          src={image}
          alt="country flag logo"
        />
      </div>
      <div class="flex-cont2 self-center py-6 px-14 md:w-8/12 md:px-5 md:mt-10 sm:px-0 sm:mt-10 sm:self-start vsm:px-0 vsm:mt-10 vsm:self-start">
        <h2 class="text-2xl font-extrabold mb-6 text-lightText dark:text-white">
          {capitalizeTheFirstLetterOfEachWord(countryName)}
        </h2>
        <div class="flex justify-between sm:flex-col sm:justify-start vsm:flex-col vsm:justify-start">
          <span class="">
            <p class="text-sm mb-2 text-lightText dark:text-white">
              <span class="font-semibold">Native Name: </span>
              {nativeName}
            </p>
            <p class="text-sm mb-2 text-lightText dark:text-white">
              <span class="font-semibold">Population: </span>
              {population}
            </p>
            <p class="text-sm mb-2 text-lightText dark:text-white">
              <span class="font-semibold">Region: </span>
              {region}
            </p>
            <p class="text-sm mb-2 text-lightText dark:text-white">
              <span class="font-semibold">Sub Region: </span>
              {subRegion}
            </p>
            <p class="text-sm mb-2 text-lightText dark:text-white">
              <span class="font-semibold">Capital: </span>
              {capital}
            </p>
          </span>
          <span class="sm:mt-10 vsm:mt-10">
            <p class="text-sm mb-2 text-lightText dark:text-white">
              <span class="font-semibold">Top Level Domain: </span>
              {topLevelDomain}
            </p>
            <p class="text-sm mb-2 text-lightText dark:text-white">
              <span class="font-semibold">Currencies: </span>
              {currencies}
            </p>
            <p class="text-sm mb-2 text-lightText dark:text-white">
              <span class="font-semibold">languages: </span>
              {languages}
            </p>
          </span>
        </div>
        <div class="flex justify-between items-center mt-8 sm:mt-10 vsm:mt-10">
          <p class="font-semibold text-sm text-lightText dark:text-white">
            Border Countries:{" "}
          </p>
          <div class="flex items-center flex-wrap">
            {!borders ? (
              <p class="text-sm dark:text-white">No borders Found</p>
            ) : (
              ""
            )}
            {status === "pending" && <Fragment>{pending}</Fragment>}
            {error && <Fragment>{errorCheck}</Fragment>}
            {loadedCountry && (
              <Fragment>
                {loadedCountry.map((country) => {
                  const URL = `/countries/${country.countryName
                    .split(" ")
                    .join("-")}`;
                  return (
                    <Link
                      to={URL}
                      class={`px-6 py-1 text-xs shadow-md ml-4 rounded-t rounded-b dark:text-white dark:bg-darkEle ${classAddMb} vsm:mb-2`}
                    >
                      {capitalizeTheFirstLetterOfEachWord(country.countryName)}
                    </Link>
                  );
                })}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCountryDetail;
