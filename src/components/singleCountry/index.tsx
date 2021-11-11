import { Wrapper, SideFilters, COUNTRY } from "./styles";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import ReactCountryFlag from "react-country-flag";


export default function SingleCountry() {
  let params = useParams();

  // let code = params.country_code;

  const COUNTRY_QUERY = gql`
  {
    country(code:"${params.country_code}"){
    code
    name
    continent{
      name
    }
    capital
    currency
    languages{
      name
    }
    emoji
    emojiU
  
   }
  }
`;

  const { data, loading, error } = useQuery(COUNTRY_QUERY);


  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <Wrapper>
      <SideFilters>
        <Link to="/">
          <i>
            <FaArrowAltCircleLeft />
          </i>
        </Link>
      </SideFilters>
      <COUNTRY>
        <ul>
              <li><ReactCountryFlag
                className="emojiFlag"
                countryCode={data.country.code}
                style={{
                  fontSize: "60px",
                  height: '60px'
                }}
                aria-label={data.country.name}
                svg
              /></li>
              <li><strong>Code:</strong> {data.country.code}</li>
              <li><strong>Name:</strong> {data.country.name}</li>
              <li><strong>Currency:</strong> {data.country.currency}</li>
              <li><strong>Continent:</strong> {data.country.continent.name}</li>
              <li><strong>Language:</strong> {data.country.languages[0].name}</li>
              <li><strong>Capital:</strong> {data.country.capital}</li>
        </ul>
       
      </COUNTRY>
    </Wrapper>
  );
}
