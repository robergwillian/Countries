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
              <ReactCountryFlag
                className="emojiFlag"
                countryCode={props.code}
                style={{
                  fontSize: "2em",
                  height: '24px'
                }}
                aria-label="United States"
                svg
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-6">{props.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
