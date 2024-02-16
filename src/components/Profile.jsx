import "../css/Profile.css";

export const Profile = ({ name, country, source, charge, channel, tag }) => {
  return (
    <div className="profile-container">
      <img className="img-profile" src={source} alt={name} />

      <div className="info-container">
        <span className="name">{name}</span>
        <ul className="list">
          <li>
            <span className="resalted">Country: </span> {country}
          </li>
          <li>
            <span className="resalted">Charge: </span> {charge}
          </li>
          <li>
            <span className="resalted">YouTube Channel: </span>
            <a href={channel} target="_blank">
              {tag}
            </a>
          </li>
        </ul>

        <p className="review-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum
          amet dolore commodi animi repellendus porro quod similique eius iusto
          cupiditate neque dolorum consequatur at, tenetur obcaecati, sapiente
          quas eligendi.
        </p>
      </div>
    </div>
  );
};
