import Input from '../../UI/Input'

import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    return <form className={classes.form}>
        <Input label='Cantidad' 
        input={{
            id: 'amount_' + props.id, // this changed!
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }} />
        <button>
            + Agregar
        </button>
    </form>
}

export default MealItemForm;