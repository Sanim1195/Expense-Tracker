import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setEditing] = useState(false);
    const savedExpenseDataHandler = (enteredExpenseData) => {
        //creating a function for event prop
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        // console.log(expenseData);
        setEditing(false);
    };

    const startEditingHandler = () => {
        setEditing(true);
    }

    const stopEditingHandler = () => {
        setEditing(false);
    }


    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler} >Add a new Expense </button>}
        {isEditing && <ExpenseForm  onCancel = {stopEditingHandler} onSaveExpenseData={savedExpenseDataHandler} />}
    </div>

}

export default NewExpense;