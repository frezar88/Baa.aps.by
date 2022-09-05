import React from 'react';
import s from "../../TableStatisticalAnalysis.module.css";

const ResultItemModel = ({title, data,click,date_load,name,filter,slice}) => {

    return (
        <>
            {data.data
            ?  <div className={s.result__item}>
                    <div className={s.title}>
                        <div></div>
                        <h6>{title}</h6>
                        <button onClick={()=>click(date_load,name,slice,filter)}>Скачать</button>
                    </div>
                    <div className={[s.result__item_head,s.head_model].join(' ')}>
                        <div>№</div>
                        <div>%</div>
                        <div>Brand</div>
                        <div>Модель</div>
                        <div>2022</div>
                        <div>2021</div>
                        <div>YoY</div>
                    </div>
                    {
                       data.data
                            ? data.data.sort((a,b)=>b.inter - a.inter).filter((item)=>filter?+item.car_type === +filter:item).slice(0,slice).map((el,index) =>
                                <div key={index} className={[s.result__item_body,s.body_model].join(' ')}>
                                    <div>{index+1}</div>
                                    <div>{el.inter?el.inter:0}%</div>
                                    <div>{el.brand?el.brand:0}</div>
                                    <div>{el.car_name?el.car_name:0}</div>
                                    <div>{el['2022']?el['2022']:0}</div>
                                    <div>{el['2021']?el['2021']:0}</div>
                                    <div>{String(el['yoy']).replace('.','')?String(el['yoy']).replace('.',''):0}</div>
                                </div>
                            )
                            : ''
                    }
                    <div className={[s.result__item_head,s.head_model].join(' ')}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>Всего</div>
                        <div>{data.total['2022']?data.total['2022']:0}</div>
                        <div>{data.total['2021']?data.total['2021']:0}</div>
                        <div>{String(data.total['yoy']).replace('.','')?String(data.total['yoy']).replace('.',''):0}%</div>
                    </div>
                </div>
            :''
            }
        </>

    );
};

export default ResultItemModel;