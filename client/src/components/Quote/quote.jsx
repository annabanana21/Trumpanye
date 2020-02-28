import axios from 'axios';
import React from 'react';
import './quote.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import chat from '../../assets/chatting.svg';

function Quote() {
    return (
        <section className='display'>
            <div className='display__bubble'>
                <div className='display__icon'>
                    <p>Diss goes here</p>
                </div>
                <div className='display__triangle'></div>
            </div>
        </section>
    )
}

export default Quote;