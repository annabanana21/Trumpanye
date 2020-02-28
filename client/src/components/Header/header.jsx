import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <section className='header'>
            <Link to='/'><FontAwesomeIcon icon={faArrowLeft} className='header__icons' size={'4x'}/></Link>
            <FontAwesomeIcon icon={faRetweet} className='header__icons' size={'4x'} onClick={props.handler}/>
        </section>
    )
}

export default Header;