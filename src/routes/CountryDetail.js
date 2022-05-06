import React, { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getSingleCountry } from "../lib/api";

import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import EachCountryDetail from "../components/countryDetail/EachCountryDetail";

import icons from "../svg/sprite.svg";

const CountryDetail = () => {
  const params = useParams();
  const { countryDetail } = params;

  const {
    sendRequest,
    status,
    data: loadedCountry,
    error,
  } = useHttp(getSingleCountry, true);

  useEffect(() => {
    sendRequest(countryDetail.split("-").join(" "));
  }, [sendRequest, countryDetail]);

  return (
    <Fragment>
      <Link to="/">
        <span class="flex items-center shadow-md pl-3 py-2 w-24 dark:bg-darkEle rounded-t rounded-b">
          <span>
            <svg class="h-5 w-5 mr-3 dark:stroke-white dark:fill-white">
              <use xlinkHref={`${icons}#icon-keyboard_backspace`}></use>
            </svg>
          </span>
          <span class="dark:text-white">Back</span>
        </span>
      </Link>
      {status === "pending" && (
        <div class="centered mt-5">
          <LoadingSpinner />
        </div>
      )}
      {error && <div class="centered mt-5 dark:text-white">{error}</div>}
      {loadedCountry && (
        <Fragment>
          <EachCountryDetail data={loadedCountry} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default CountryDetail;
