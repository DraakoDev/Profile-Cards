import "../css/Profile.css";

export const Profile = ({ name, country, source, charge, channel }) => {
  return (
    <div className="profile-container">
      <img className="img-profile" src={source} alt={name} />

      <div className="info-container">
        <h2 className="name">{name}</h2>
        <ul className="list">
          <li>Country: {country}</li>
          <li>Charge: {charge}</li>
          <li>
            YouTube Channel:
            <a href={channel} target="_blank">
              {channel}
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
