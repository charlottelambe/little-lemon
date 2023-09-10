import GreekSalad from '../../../images/greek-salad.png';
import Bruschetta from '../../../images/bruschetta.png';
import LemonDessert from '../../../images/lemon-dessert.png';
import Cycling from '../../../images/cycling.png';

const Specials = () => {
    return (

    <specials>
       <h1>This week's specials!</h1>
       <button>Online Menu</button>
       <article>
            <img src={GreekSalad} alt="Greek Salad" />
            <h4>Greek Salad</h4>
            <p>$12.99</p>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <a href="#OrderOnline">Order a delivery</a>
            <img src={Cycling} alt="Cycling icon" />
       </article>

       <article>
            <img src={Bruschetta} alt="Bruschetta" />
            <h4>Bruschetta</h4>
            <p>$7.99</p>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="#OrderOnline">Order a delivery</a>
            <img src={Cycling} alt="Cycling icon" />
       </article>

       <article>
            <img src={LemonDessert} alt="Lemon Dessert" />
            <h4>Lemon Dessert</h4>
            <p>$5.00</p>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="#OrderOnline">Order a delivery</a>
            <img src={Cycling} alt="Cycling icon" />
       </article>
    </specials>
);
};

export default Specials;