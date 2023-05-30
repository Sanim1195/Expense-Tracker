import React from 'react';
import Chart from '../Charts/Chart';

//Returning the chart
const ExpensesChart = (props) => {

    const ChartDataPoints = [
        {label:'Jan' , value: 0 },
        {label:'Feb' , value: 0 },
        {label:'Mar' , value: 0 },
        {label:'Apr' , value: 0 },
        {label:'May' , value: 0 },
        {label:'Jun' , value: 0 },
        {label:'Jul' , value: 0 },
        {label:'Aug' , value: 0 },
        {label:'Sep' , value: 0 },
        {label:'Oct' , value: 0 },
        {label:'Nov' , value: 0 },
        {label:'Dec' , value: 0 }
    ];
    //Looping throuh the expense list and getting the date value
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
            // Adding amount to the values to the array above
        ChartDataPoints[expenseMonth].value += expense.amount; 
    }

    return <Chart dataPoints = {ChartDataPoints}> </Chart>
}

export default ExpensesChart;