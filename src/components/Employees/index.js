import React from 'react';
import { useState, useEffect } from 'react';
import service from '../../services/service';

export default function Employees() {
    const [data, setData] = useState('0');
    useEffect(() => {
        (async() => {
            const result = await service();
            setData(result.data);
        })();
    }, []);

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    console.log(alphabet);
    console.log(data)

    return (
        <div>
            <p>Employees</p>
        </div>
    )
}
