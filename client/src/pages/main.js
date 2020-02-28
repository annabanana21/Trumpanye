import React from 'react';
import Hero from '../components/Hero/hero'
import UserForm from '../components/UserForm/userform';
import './main.scss';
import soundfile from '../assets/anthem.mp3'


class MainPage extends React.Component {
    render() {
        return (
            <main className='main'>
                <audio className='main__audio' ref='audio_tag' src={soundfile} controls autoPlay/>
                <Hero />
                <UserForm />
            </main>
        )

    }
}


export default MainPage;