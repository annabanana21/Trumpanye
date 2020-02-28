import axios from 'axios';
import React from 'react';
import './display.scss';
import Quote from '../components/Quote/quote';

function Display() {
    return (
        <main className='display'>
            <Quote />
        </main>
    )
}

export default Display;