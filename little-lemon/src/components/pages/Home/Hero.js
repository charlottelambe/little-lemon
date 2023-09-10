import restaurantFood from '../../../images/restaurant-food.png';

const Hero = () => {
    return (

    <hero>
       <h1>Little Lemon</h1> 
       <h2>Chicago</h2>
       <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
       <button>Reserve a Table</button>
       <img src={restaurantFood} alt="Food at the Little Lemon Restaurant" />
    </hero>
);
};

export default Hero;