import './Hero.css';
import restaurantFood from '../../../images/restaurant-food.png';

const Hero = () => {
    return (

    <div class="hero-container">
        <div class="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
        </div>
        <div class="hero-image">
            <img src={restaurantFood} alt="Food at the Little Lemon Restaurant" />
        </div>
    </div>
);
};

export default Hero;