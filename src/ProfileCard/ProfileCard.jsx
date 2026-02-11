import "./ProfileCard.css";
import Button from "../Button/Button";

function ProfileCard(props) {
  return (
    <div className="card-container">
      <img src={props.imgSrc} alt="profile img" className="profile-img"/>
      <p className="name">{props.name}</p>
      <p className="description">{props.description}</p>
      <Button personType={props.personType}/>
    </div>
  );
}

export default ProfileCard;
