import YellowStars from '../images/yellow-stars.png';
import MonicaBing from '../images/monica-bing.png';
import RachelGreen from '../images/rachel-green.png';
import PhoebeBuffay from '../images/phoebe-buffay.png';
import ChandlerBing from '../images/chandler-bing.png';

const Testimonials = () => {
    return (

    <testimonials>
       <h1>Testimonials</h1>
       <article>
            <img src={YellowStars} alt="5 Yellow stars" />
            <img src={MonicaBing} alt="Image of Monica Bing" />
            <p>Monica Bing</p>
            <p>Very fresh and tasty!!</p>
       </article>

       <article>
            <img src={YellowStars} alt="5 Yellow stars" />
            <img src={RachelGreen} alt="Image of Rachel Green" />
            <p>Rachel Green</p>
            <p>Fantastic service.</p>
       </article>

       <article>
            <img src={YellowStars} alt="5 Yellow stars" />
            <img src={PhoebeBuffay} alt="Image of Phoebe Buffay" />
            <p>Phoebe Buffay</p>
            <p>Quick delivery!</p>
       </article>

       <article>
            <img src={YellowStars} alt="5 Yellow stars" />
            <img src={ChandlerBing} alt="Image of Chandler Bing" />
            <p>Chandler Bing</p>
            <p>The best in town.</p>
       </article>
    </testimonials>
);
};

export default Testimonials;