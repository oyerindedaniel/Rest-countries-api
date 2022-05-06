import { Fragment } from "react";

import CountriesItem from "./CountriesItem";

const CountriesItems = (props) => {
  const { allCountries } = props;

  const renderCountries = (
    <div class="flex-countries sm:flex-countries-media860px vsm:flex-countries-maxMedia570px">
      {allCountries.map((country) => (
        <CountriesItem
          key={country.key}
          countryName={country.countryName}
          image={country.image}
          region={country.region}
          population={country.population}
          capital={country.capital}
        />
      ))}
    </div>
  );

  return <Fragment>{renderCountries}</Fragment>;
};

export default CountriesItems;
