import React from 'react';
import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    return(
        <section className='hero'>
            <div className='hero__image'>
                <div className='hero__container'>
                    <h3 className='hero__yell'>You're Fired!!</h3>
                    <h5 className='hero__softer'>but first...</h5>
                    <FontAwesomeIcon icon={faChevronDown} className='hero__speech' size={'3x'}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;