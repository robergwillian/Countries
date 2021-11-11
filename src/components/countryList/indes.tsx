import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Card from "../list/card";
import { List } from "./styles";

interface TContinents {
  code:string
}

interface TCountry {
  name: string;
  code: string;
};


export default function CountryList({code}: TContinents){

  let LIST_COUNTRIES = gql`
    query Counties($code: String) {
      countries(filter: { continent: { eq: $code } }) {
        name
        code
      }
    }
  `;

  const { data, loading, error } = useQuery(LIST_COUNTRIES, {
    variables: {
      code: code,
    },
  });

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

    return(
        <List>
            {data.countries.map((country: TCountry) => (
          <Card key={country.code} code={country.code} country={country.name} />
        ))}
        </List>
    )
}