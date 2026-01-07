import { useEffect, useState } from "react";

function TimeApp()
{
    const [time,setTime] = useState(10);

    const [isRunning, setIsRunning] = useState(false);

    const [isEditing, setIsEditing] = useState(false);

    const [inputValue, setInputValue] = useState(time);

    useEffect(()=>{
        if(!isRunning)
            return

        if(time==0)
        {
            setIsRunning(false);
            return
        }

        const interval = setInterval(()=>{
            setTime((prevTime)=>prevTime-1)
        },1000);

        return ()=>{
            clearInterval(interval)
        };

    }, [isRunning, time]);

    const min=Math.floor(time/60)
    const sec=(time%60);

    function handleEdit()
    {
        setTime(inputValue);
        setIsEditing(false);
    }



    return(
        <div>
            <h2>Timer App</h2>

            {isEditing ?(
                <input type="number" value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)}
                />
            ):(<h1>{min}:{sec}</h1>
            )}

            <button onClick={()=>setIsRunning(!isRunning)}>
                {isRunning?"Stop":"Start"}
            </button>
            

        </div>
    )
}
export default TimeApp;