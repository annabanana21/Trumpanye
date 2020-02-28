import axios from 'axios';
import React from 'react';
import './display.scss';
import Quote from '../components/Quote/quote';
import Gif from '../components/GIF/gif';

function Display() {
    return (
        <main className='display'>
            <Gif />
            <Quote />
        </main>
    )
}

export default Display;