import { useState } from "react"

export default function App() {

    const [dayControl, setDayControl] = useState(1)
    const [monthControl, setMonthControl] = useState(1)
    const [yearControl, setYearControl] = useState(1900)



    return (
            <div className="box">
                <form className="form">

                    <div className="formItems">

                        <div className="formItem">

                            <label htmlFor="">DAY</label>
                            <input type="number" value={dayControl} onChange={function(e) {
                                let newValue = parseInt(e.target.value);
                                if (newValue >= 1 && newValue <= 31) {
                                    setDayControl(newValue);
                                }
                            }}/>

                        </div>

                        <div className="formItem">

                            <label htmlFor="">MONTH</label>
                            <input type="number" value={monthControl} onChange={function(e) {
                                let newValue = parseInt(e.target.value);
                                if (newValue >= 1 && newValue <= 12) {
                                    setMonthControl(newValue);
                                }
                            }}/>

                        </div>

                        <div className="formItem">

                            <label htmlFor="">YEAR</label>
                            <input type="number" value={yearControl} onChange={function(e) {
                                let newValue = parseInt(e.target.value);
                                if (newValue >= 1900 && newValue <= 2023) {
                                    setYearControl(newValue);
                                }
                            }}/>

                        </div>

                    </div>
                    
                    <button><img src="./src/assets/img/button-vector.png" alt="" /></button>

                </form>
            </div>
    )
}