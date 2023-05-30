import React from "react";
import './ChartBar.css';


const ChartBar = (props) => {

                            // Calculating how the bars in the shart should fill :

    let barFillHeight = '0%';

    // Checking if the max value in chart js 
    if(props.maxValue > 0){
        barFillHeight = Math.round(props.value / props.maxValue * 100 )+ '%';
    }


 return (
 <div className="chart-bar"> 
    <div className = "chart-bar__inner"> 
        <div className="chart-bar__fill" style = {{height: barFillHeight}} >  </div>        
    </div>
    <div className="chart-bar__label" > {props.label}</div>
   
  </div>);
} ;

export default ChartBar;









