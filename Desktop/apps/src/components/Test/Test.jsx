import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Test() {

    const { id } = useParams();
    const [number, setNumber] = useState(id)
    
    const count = () => {
        setNumber(id++)
    }
    useEffect(() => {
        console.log(id);
    }, [id])

    return (
        <div>
            <button onClick={count}>click</button>
            {number}
        </div>
    )
}

export default Test
