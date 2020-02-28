import React from 'react';
import './quote.scss';
import trump from '../../assets/talking-real.png';


function Quote() {
    return (
        <section className='display'>
            <div className='display__bubble'>
                <div className='display__icon'>
                    <p>Diss goes here</p>
                </div>
                <div className='display__triangle'></div>
            </div>
            <img src={trump} className='display__trump'/>
        </section>
    )
}

export default Quote;