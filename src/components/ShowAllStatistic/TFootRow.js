import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const TFootRow = observer( () => {
    const {user} = useContext(Context)
    const [count, setCount] = useState(0)
    let totalCount = 0

    if (user.UserLoadDone) {
        let span = document.querySelectorAll('span.total-span')
        span.forEach(el => {
            if (el.innerHTML !== '0')
                totalCount += +el.innerHTML
        })
        setCount(totalCount)

    }

    return (
        <tr>
            <td></td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>0</span>
            </td>
            <td>
                <span>{count}</span>
            </td>
        </tr>
    );
});

export default TFootRow;