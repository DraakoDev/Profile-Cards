import "../css/Profile.css";
import { Counter } from "../components/Counter";
import { socialMedia } from "../constans/data";

export const Profile = ({ info }) => {
  const { name, country, source, charge, channel, insta, twitter_x } = info;
  return (
    <div className="profile-container">
      {console.log(name)}
      {/* Personal img */}
      <img className="img-profile" src={source} alt={name} />

      <div className="info-container">
        {/* Personal info */}
        <span className="name">{name}</span>
        <ul className="list">
          <li>
            <span className="resalted">Country: </span> {country}
          </li>
          <li>
            <span className="resalted">Charge: </span> {charge}
          </li>
        </ul>

        {/* Short description for profile  */}
        <p className="review-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum
          amet dolore commodi animi repellendus porro quod similique eius iusto
          cupiditate neque dolorum consequatur at, tenetur obcaecati, sapiente
          quas eligendi.
        </p>

        {/* Button links to social media */}
        <div>
          <span>Social Media</span>
          <div>
            <Counter>
              <a href={insta} target="_blank">
                <img src="svg/instagram.svg" alt="Instagram" />
              </a>
            </Counter>
            <Counter>
              <a href={channel} target="_blank">
                <img src="svg/youtube.svg" alt="YouTube" />
              </a>
            </Counter>
            <Counter>
              <a href={twitter_x} target="_blank">
                <img src="svg/twitter-x.svg" alt="twitter-x" />
              </a>
            </Counter>
          </div>
        </div>
      </div>
    </div>
  );
};
