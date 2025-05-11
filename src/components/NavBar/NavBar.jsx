import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.scss";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
  const { cart } = useCart(); // Access the cart state from the context

  const totalItemsInCart = cart.reduce(
    (sum, item) => sum + (item?.quantityAdded || 0),
    0
  );
  const linkStyles = ({ isActive }) =>
    isActive ? `${classes.link} ${classes.active_link}` : classes.link;

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.brandName}>
          <NavLink className={linkStyles} to="/">
            <i className="fa-solid fa-house"></i> NextGen Mobiles
          </NavLink>
        </div>
        <div className={classes.linksName}>
          <NavLink className={linkStyles} to="/products">
            <i className="fa-solid fa-mobile-screen-button"></i> Products
          </NavLink>
          <NavLink className={linkStyles} to="/favourite">
            Favourite
          </NavLink>
          <NavLink className={linkStyles} to="/cart">
            <i className="fa-solid fa-cart-shopping"></i> Cart (
            {totalItemsInCart})
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
