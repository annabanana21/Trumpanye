import axios from 'axios';
import React from 'react';
import Hero from '../components/Hero/hero'
import UserForm from '../components/UserForm/userform';
import './main.scss';

function MainPage() {
    return (
        <main className='main'>
            <Hero />
            <UserForm />
        </main>
    )
}


export default MainPage;