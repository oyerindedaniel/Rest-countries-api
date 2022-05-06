import { Fragment } from "react";

import { Link } from "react-router-dom";
import { capitalizeTheFirstLetterOfEachWord } from "../../utilities/capitalizeTheFirstLetterOfEachWord";

const QuerySearchedCountries = (props) => {
  const { image, countryName, population } = props;

  const URL = `/countries/${countryName.split(" ").join("-")}`;
  return (
    <Fragment>
      <Link
        to={URL}
        class="flex justify-start items-center py-3 px-4 hover:bg-neutral-200 dark:bg-darkEle dark:hover:bg-darkBg min-h-5rem"
      >
        <div class="w-20 h-14 mr-4 vsm:mr-2">
          <img
            class="w-full h-full object-cover rounded-t-md rounded-b-md shadow-md"
            src={image}
            alt="country flag logo"
          />
        </div>
        <span>
          <h3 class="font-semibold dark:text-white ">
            {capitalizeTheFirstLetterOfEachWord(countryName)}
          </h3>
          <p class="text-sm dark:text-white">{population}</p>
        </span>
      </Link>
    </Fragment>
  );
};

export default QuerySearchedCountries;
