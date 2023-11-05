
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,currency } = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        // setNewBudget(event.target.value);
        dispatch({ type: 'SET_BUDGET', payload: event.target.value });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} {budget}</span>
<input type="number" step="10" max={20000} value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;