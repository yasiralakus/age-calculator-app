import { useState } from "react"

export default function App() {

    const [dayControl, setDayControl] = useState(null)
    const [monthControl, setMonthControl] = useState(null)
    const [yearControl, setYearControl] = useState(null)
    const [ageYears, setAgeYears] = useState('--');
    const [ageMonths, setAgeMonths] = useState('--');
    const [ageDays, setAgeDays] = useState('--');

    function handleClick(e) {
        e.preventDefault();
        calculator();
    }

    function calculator() {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();

        let calculatedAgeYears = currentYear - parseInt(yearControl, 10);
        let calculatedAgeMonths = currentMonth - parseInt(monthControl, 10);
        let calculatedAgeDays = currentDay - parseInt(dayControl, 10);

        if (calculatedAgeMonths < 0) {
        calculatedAgeYears--;
        calculatedAgeMonths += 12;
        }

        if (calculatedAgeDays < 0) {
        const lastMonthDays = new Date(
            currentYear,
            currentMonth - 1,
            0
        ).getDate();
        calculatedAgeMonths--;
        calculatedAgeDays += lastMonthDays;
        }

        setAgeYears(calculatedAgeYears);
        setAgeMonths(calculatedAgeMonths);
        setAgeDays(calculatedAgeDays);

        };

    return (
            <div className="box">
                <form className="form">

                    <div className="formItems">

                        <div className="formItem">

                            <label htmlFor="">DAY</label>
                            <input placeholder="DD" type="number" value={dayControl} onChange={function(e) {
                                let newValue = parseInt(e.target.value);
                                if (newValue >= 1 && newValue <= 31) {
                                    setDayControl(newValue);
                                }
                            }}/>

                        </div>

                        <div className="formItem">

                            <label htmlFor="">MONTH</label>
                            <input placeholder="MM" type="number" value={monthControl} onChange={function(e) {
                                let newValue = parseInt(e.target.value);
                                if (newValue >= 1 && newValue <= 12) {
                                    setMonthControl(newValue);
                                }
                            }}/>

                        </div>

                        <div className="formItem">

                            <label htmlFor="">YEAR</label>
                            <input placeholder="YYYY" type="number" value={yearControl} onChange={function(e) {
                                let newValue = parseInt(e.target.value);
                                if (newValue >= 1900 && newValue <= 2023) {
                                    setYearControl(newValue);
                                }
                            }}/>

                        </div>

                    </div>

                    <button onClick={handleClick}><img src="./img/button-vector.png" alt="" /></button>

                </form>

                <div className="results">
                    
                    <h1><span>{ageYears}</span> years</h1>
                    <h1><span>{ageMonths}</span> months</h1>
                    <h1><span>{ageDays}</span> days</h1>

                      

                </div>
            </div>
    )
}