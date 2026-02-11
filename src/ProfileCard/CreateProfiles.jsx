import './ProfileCard.css'
import ProfileCard from "./profileCard";

function CreateProfiles() {
  const profiles = [
    {
      imgSrc: "src/assets/3519275.jpg",
      name: "Alice",
      description: "Always curious to learn more",
      personType: "Student",
    },
    {
      imgSrc: "src/assets/35192751.jpg",
      name: "Dr. Smith",
      description: "Expert in Computer Science",
      personType: "Teacher",
    },
    {
      imgSrc: "src/assets/35192752.jpg",
      name: "Yossi",
      description: "Always there for a coffee break",
      personType: "Friend",
    },
    {
      imgSrc: "src/assets/35192753.jpg",
      name: "Noa",
      description: "Struggling with Calculus but keeping a smile",
      personType: "Student",
    },
    {
      imgSrc: "src/assets/35192754.jpg",
      name: "Sarah",
      description: "History is my passion",
      personType: "Teacher",
    },
    {
      imgSrc: "src/assets/35192755.jpg",
      name: "Mike",
      description: "Best gaming partner ever",
      personType: "Friend",
    },
    {
      imgSrc: "src/assets/35192756.jpg",
      name: "David",
      description: "Writing my thesis on AI",
      personType: "Student",
    },
    {
      imgSrc: "src/assets/35192757.jpg",
      name: "Dana",
      description: "The soul of every party",
      personType: "Friend",
    },
  ];

  return (
    <div className="cards-container">
      {profiles.map((profile) => (
        <ProfileCard
          imgSrc={profile.imgSrc}
          name={profile.name}
          description={profile.description}
          personType={profile.personType}
        />
      ))}
    </div>
  );
}

export default CreateProfiles;
