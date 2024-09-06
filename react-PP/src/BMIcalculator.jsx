import React, { useState } from "react";
import "./BMIcalculator.css";


function BMICalculator(){
    const[weight , setWeight]=useState(""); 
    const[height , setHeight]=useState(""); 
    const[bmi , setBmi]=useState("");
    const [category , setCategory]=useState("null");
     
     const calculateBMI = ()=>{
        if(height && weight){
            const heightInMeters = height/100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmi);

            
            if(bmi < 18.5){
                setCategory("UnderWeight");
            }
            else if(bmi >= 18.5 && bmi <= 24.5){
                setCategory("Normal")}
            else if(bmi >= 24.5 && bmi <= 29.5){
                setCategory("OverWeight");
            }else{
                setCategory("Obese");
            }
        }
    }


    
    
    return(
        <div className="bmi-card">
            <h1 >BMI Calculator</h1>
            <div>
                <label>Weight</label>
               <input 
               type='number'
               value={weight}
               onChange={(e)=> setWeight(e.target.value)}
               placeholder="write your weight" />

            <div>
                <label>Height</label>
               <input 
               type='number'
               value={height}
               onChange={(e)=> setHeight(e.target.value)}
               placeholder="write your height" />

            </div>
        <button className="calculate" onClick={calculateBMI}>Calculate</button>
            {
                bmi &&(
                    <div className="result">
                        <h3>Your BMI is:{bmi}</h3>
                        <h4>Category :{category}</h4>
                    </div>
                )
            }
            
            </div>

            





        </div>
     
    )

}
export default BMICalculator;