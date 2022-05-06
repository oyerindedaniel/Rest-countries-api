import { Link } from "react-router-dom";

import { capitalizeTheFirstLetterOfEachWord } from "../../utilities/capitalizeTheFirstLetterOfEachWord";
const CountriesItem = (props) => {
  const { image, population, countryName, region, capital } = props;

  return (
    <div class="">
      {
        <Link to={countryName.split(" ").join("-")}>
          <figure class="w-64 h-80 shadow-md relative rounded-t rounded-b overflow-hidden bg-white dark:bg-darkEle vsm:justify-self-center">
            <span class="absolute w-full h-40 top-0 left-0">
              <img
                class="w-full h-full object-cover"
                src={image}
                alt="country flag logo"
              />
            </span>
            <span>
              <figcaption class="absolute w-full h-40 bottom-0 left-0 bg-red text-black text-sm px-4 py-4 rounded-b overflow-hidden">
                <h3 class="font-extrabold mb-4 text-base text-lightText dark:text-white">
                  {capitalizeTheFirstLetterOfEachWord(countryName)}
                </h3>
                <p class="mb-1 text-sm text-lightText dark:text-white">
                  <span class="font-semibold">Population: </span>
                  {population}
                </p>
                <p class="mb-1 text-sm text-lightText dark:text-white">
                  <span class="font-semibold">Region: </span> {region}
                </p>
                <p class="mb-1 text-sm text-lightText dark:text-white">
                  <span class="font-semibold">Capital: </span> {capital}
                </p>
              </figcaption>
            </span>
          </figure>
        </Link>
      }
    </div>
  );
};

export default CountriesItem;
