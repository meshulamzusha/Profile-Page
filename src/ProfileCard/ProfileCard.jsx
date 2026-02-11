import "./ProfileCard.css";
import Button from "../Button/Button";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.imgSrc} alt="profile image" className="profile-img" />
      <p className="person-name">{props.name}</p>
      <p className="description">{props.description}</p>
      <Button personType={props.personType}></Button>
    </div>
  );
}

export default ProfileCard;
