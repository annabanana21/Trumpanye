import React from 'react';
import './gif.scss';

function Gif(props) {
    return (
        <section className='gif-display'>
            <div style={{ backgroundImage: `url(${props.image})`}} className='gif-display__container'></div>
        </section>
    )
}

export default Gif;