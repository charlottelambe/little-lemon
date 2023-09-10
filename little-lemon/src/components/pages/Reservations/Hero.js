import restaurant from '../../../images/restaurant.png';

const ReservationsHero = () => {
    return (

    <reservationshero>
       <h1>Reserrvations</h1> 
       <h2>Little Lemon</h2>
       <p>Whether you want a romantic dinner for two or  a meal with the family, our restaurant can cater for you.</p>
       <p>Book a table using the form below.</p>
       <img src={restaurant} alt="The Little Lemon Restaurant" />
    </reservationshero>
);
};

export default ReservationsHero;