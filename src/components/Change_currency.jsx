import { AppContext } from '../context/AppContext';
import React, { useContext } from 'react';


const Change_currency = () => {
    const { dispatch } = useContext(AppContext);

    function handle_change_currency(event) {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });





    }

    return (
        <div className='alert alert-success' style={{ backgroundColor: '#d4edda', color: '#155724' }}>
            <label>Currency:</label>
            <select onChange={handle_change_currency} className='form-select' style={{ color: '#155724' }}>
                <option value='$'>$ Dollar</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupee</option>
                <option value='£'>£ Pound</option>
            </select>
        </div>
    );
};

export default Change_currency;