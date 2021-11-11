import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

type CardProps = {
    code:string,
    country:string
}

export default function Card(props:CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-24x24">
            <Link to={`/country/${props.code}`}>
              <ReactCountryFlag
                className="emojiFlag"
                countryCode={props.code}
                style={{
                  fontSize: "2em",
                  height: '24px'
                }}
                aria-label={props.country}
                svg
              />
            </Link>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-6"><Link to={`/country/${props.code}`}>{props.country}</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
