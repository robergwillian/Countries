import { Wrapper, SideFilters, SideBarInput, SearchButton, SelectField } from "./styles";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";
import CountryList from "../countryList/index";

type TContinent = {
  name: string;
  code: string;
};

export default function List() {
  const [continent, setContinent] = useState("AF");
  const [currency, setCurrency] = useState("");

  const LIST_CONTINENTS = gql`
    {
      continents {
        name
        code
      }
    }
  `;

  const FILTER_BY_CURRENCY = gql`
  {
    countries(filter: { currency: { in: "${currency.toUpperCase()}"} }) {
            name
            code
          }
      
    }
  `;

  const {
    data: continent_data,
    loading: continent_loading,
    error: continent_error,
  } = useQuery(LIST_CONTINENTS);

  const [getCurrency, { data: currency_data }] = useLazyQuery(FILTER_BY_CURRENCY);

  if (continent_loading || continent_error) {
    return <p>{continent_error ? continent_error.message : "Loading..."}</p>;
  }

  return (
    <Wrapper>
      <SideFilters>
        <SideBarInput className="inputSideBar" type="text" placeholder="Search by name" />
        <SideBarInput
          className=""
          type="text"
          name="currency"
          placeholder="Search Currency ex: USD"
          onChange={(e) => setCurrency(e.target.value)}
        />
        <SearchButton onClick={() => getCurrency()}>Search</SearchButton>
        <div className="">
          <SelectField onChange={(e) => setContinent(e.target.value)}>
            {continent_data.continents.map((continent: TContinent) => (
              <option key={continent.code} value={continent.code}>
                {continent.name}
              </option>
            ))}
          </SelectField>
        </div>
      </SideFilters>
      {currency_data ? (
        <CountryList code={currency_data} />
      ) : (
        <CountryList code={continent} />
      )}
    </Wrapper>
  );
}
