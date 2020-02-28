import React from 'react';
import './quote.scss';
import trump from '../../assets/talking-real.png';
import audio from '../../assets/sounds/trump-Disgrace.wav';


function Quote(props) {

    const playSound = () => {
        var audio = document.getElementById("audio");
        if (audio) {
            audio.play();
        }
    }


    return (
        <section className='display-cont'>
            <div className='display__bubble'>
                <div className='display__icon'>
                    <p className='display__quote'>{props.diss}</p>
                </div>
                <div className='display__triangle'></div>
            </div>
            <div className='display__trump' onClick={playSound}></div>
            <audio id="audio" src={audio}></audio>
        </section>
    )
}

export default Quote;