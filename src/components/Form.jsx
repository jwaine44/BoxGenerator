import React, {useState} from 'react';
import DisplayBox from './DisplayBox';

const Form = ({addBox}) => {
    const [box, setBox] = useState({
        height: "100px",
        width: "100px",
        border: "1px solid black",
        backgroundColor: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(box);
    };

    const setColor = (e) => {
        setBox({
            ...box,
            backgroundColor: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color</label>
                <input type="text" name = 'color' value = {box.backgroundColor} onChange={setColor} />
                <input type="submit" value="Add" />
            </div>
        </form>
    )
}

export default Form;