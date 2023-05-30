import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    //The use state is empty string as there is no input in the beginning while rendering the page:
    // We can make individual use stated for each state 

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //OR by passing an object inside the use state

    // const [userInput , setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     // Using spread operator ... to store other values in the state
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     // Using spread operator ... to store other values in the state
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     // Using spread operator ... to store other values in the state
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };
    //Making form objects
    const submitHandler = (event) => {
        //To stop the page from reloading after addExpense button click 
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        
        //Makingthe inout form empty after the values are passed:
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2024 -12-31" value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
        </div>

        <div className="new-expense__actions">
            <button type = "button" onClick={props.onCancel}> Cancel </button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;
