import { Wrapper, SideFilters } from "./styles";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import CountryList from "../countryList/indes";

type TContinent = {
  name: string;
  code: string;
};

export default function List() {
  const [continent, setContinent] = useState("AF");

  const LIST_CONTINENTS = gql`
    {
      continents {
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

  if (continent_loading || continent_error) {
    return <p>{continent_error ? continent_error.message : "Loading..."}</p>;
  }

  return (
    <Wrapper>
      <SideFilters>
        <input className="" type="text" placeholder="SEARCH" />
        <div className="">
          <select onChange={(e) => setContinent(e.target.value)}>
            {continent_data.continents.map((continent: TContinent) => (
              <option value={continent.code}>{continent.name}</option>
            ))}
          </select>
        </div>
      </SideFilters>
      <CountryList code={continent} />
    </Wrapper>
  );
}
