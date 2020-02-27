import axios from 'axios';
import React from 'react';
import Hero from '../components/Hero/hero'
import UserForm from '../components/UserForm/userform';

function MainPage() {
    return (
        <main>
            <Hero />
            <UserForm />
        </main>
    )
}


export default MainPage;