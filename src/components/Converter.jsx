import { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import "./Converter.css"

const Converter = () => {

    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

     // Calling the api whenever the dependency changes
    useEffect(() => {
        axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
    .then((res) => {
        setInfo(res.data[from]);
        })
    }, [from]);
    
    // Calling the convert function whenever
    // a user switches the currency
    useEffect(() => {
        setOptions(Object.keys(info));
        convert();
    }, [info])
    
    function convert() {
        var rate = info[to];
        setOutput(input * rate);
      }

        // Function to switch between two currency
    function flip() {
        var temp = from;
        setFrom(to);
        setTo(temp);
    }
  

  return (
    <div className='converter'>
        <p>Check the currency rates against all the world currencies here. The currency converter below is easy to use and the currency rates are updated frequently</p>
        <div className="converter-form">
            <div className="container-converter">
                <div className="convertor-left">
                <h3>Amount</h3>
                <input className='convertor-input' type="text" 
                    placeholder="Enter the amount" 
                    onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className="middle">
                <h3>From</h3>
                <Dropdown options={options} 
                            onChange={(e) => { setFrom(e.value) }}
                value={from} placeholder="From" />
                </div>
                <div className="switch">
                <HiSwitchHorizontal size="30px" color='#fff' 
                                onClick={() => { flip()}}/>
                </div>
                <div className="convertor-right">
                <h3>To</h3>
                <Dropdown options={options} 
                            onChange={(e) => {setTo(e.value)}} 
                value={to} placeholder="To" />
                </div>
            </div>
            <div className="result">
                <button className="btn" onClick={()=>{convert()}}>Convert</button>
                <h3>Converted Amount: {input+" "+from+" = "+output.toFixed(2) + " " + to}</h3>
        
            </div>
            </div>
        </div>
  )
}

export default Converter
