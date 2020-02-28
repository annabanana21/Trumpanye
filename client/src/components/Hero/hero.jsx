import React from 'react';
import './hero.scss';

function Hero() {
    return(
        <section className='hero'>
            <div className='hero__image'>
                <div className='hero__container'>
                    <h3 className='hero__yell'>You're Fired!!</h3>
                    <h5 className='hero__softer'>but first...</h5>
                </div>
            </div>
        </section>
    );
}

export default Hero;