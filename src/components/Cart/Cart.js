import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Cantidad total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Cerrar
        </button>
        {hasItems && <button className={classes.button}>Pedir</button>}
      </div>
    </Modal>
  );
};

export default Cart;
