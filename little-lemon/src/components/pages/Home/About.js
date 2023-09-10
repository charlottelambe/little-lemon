import MarioAndAdrianA from '../../../images/mario-and-adrian-a.png';
import MarioAndAdrianB from '../../../images/mario-and-adrian-b.png';

const About = () => {
    return (

    <about>
       <h1>About Us</h1> 
       <h2>Adrian & Mario</h2>
       <p>Adrian and Mario have a combined 20 years of experience. They are cooking up a storm through putting a modern twist on original family recipes.</p>
       <p>They love working with fresh produce including freshly caught fish, home-grown tomatoes and home-made feta cheese.</p>
       <p>Reserve a table or order online to sample this week’s specials!</p>
       <img src={MarioAndAdrianA} alt="Image of Mario and Adrian" />
       <img src={MarioAndAdrianB} alt="Image of Mario and Adrian" />
    </about>
);
};

export default About;