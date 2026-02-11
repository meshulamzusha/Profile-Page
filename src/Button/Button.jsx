import "./Button.css";

function Button(props) {
  const btnColor = (personType) => {
    let color;
    switch (personType) {
      case "Friend":
        color = "green";
        break;
      case "Teacher":
        color = "blue";
        break;
      case "Student":
        color = "purple";
        break;
      default:
        color = "default";
    }

    return color;
  };

  return <div>
    <button className={`${btnColor(props.personType)}-btn`}>Click Me!</button>
  </div>;
}

export default Button;
