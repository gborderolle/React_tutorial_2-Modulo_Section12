import HeaderCartButton from './HeaderCartButton'

import image from '../../assets/background (1).jpg'
import classes from './Header.module.css'

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>PedidosYa</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={image} alt='imagen' />
        </div>
    </>
}

export default Header;