import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.data,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
}

let keyCount = 0;
function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        const newLoadedCountries = [...responseData];
        // console.log(newLoadedCountries);
        // const filterNewLoadedCountries = newLoadedCountries.slice(0, 250);
        const data = newLoadedCountries.map((country) => {
          const {
            currencies,
            languages,
            name: { nativeName },
            capital,
            subregion,
            tld,
          } = country;

          let countryCurrency = currencies
            ? Object.values(currencies)[0].name
            : "No Currency Found";
          let nameFound = nativeName
            ? Object.values(nativeName)[Object.values(nativeName).length - 1]
                .official
            : "No Native Name Found";
          let languagesObj = languages
            ? Object.values(languages).join(", ")
            : "No Language Found";
          let capitalFound = capital ? capital[0] : "No Capital Found";
          let subregionFound = subregion ? subregion : "No Sub-Region Found";
          let tldFound = tld ? tld[0] : "No tld Found";

          return {
            key: keyCount++,
            countryName: country.name.common.toLowerCase(),
            population: country.population.toLocaleString("en-US"),
            region: country.region,
            capital: capitalFound,
            image: country.flags.svg,
            nativeName: nameFound,
            subRegion: subregionFound,
            topLevelDomain: tldFound,
            currencies: countryCurrency,
            languages: languagesObj,
            borders: country.borders,
          };
        });
        dispatch({ type: "SUCCESS", data });
      } catch (error) {
        console.log(error.message);
        console.log("error found");
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
