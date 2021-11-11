import React  from 'react';




const StatisticRow = (props) => {

    if (props['count-date'][0]){
        props['count-date'].forEach(el=>{
            let input = document.querySelector(`tr td span[data-mount="${el.date}"][data-brand-id="${props.id}"]`)
            if (input) input.innerHTML=el.value

        })

    }


    function totalCount() {
        let count= 0
        let span = document.querySelectorAll(`tr td span[data-brand-id="${props.id}"]`)
        span.forEach(el=>{
            if (el.innerHTML !== '0'){
                count+= Number(el.innerHTML)

            }
        })

        return count
    }

    return (

        <tr>
            <td>{props.name}</td>
            <td>

                <span data-brand-id={props.id} data-mount={'1609448400'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1612126800'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1614546000'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1617224400'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1619816400'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1622494800'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1625086800'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1627765200'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1630443600'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1633035600'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1635714000'}>0</span>
            </td>
            <td>
                <span data-brand-id={props.id} data-mount={'1638306000'}>0</span>
            </td>
            <td >
                <span className='total-span' data-brand-id={props.id}>{totalCount()}</span>
            </td>

        </tr>
    );
};

export default StatisticRow;