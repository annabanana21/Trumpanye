import React from 'react';
import './quote.scss';
import trump from '../../assets/talking-real.png';
import audio from '../../assets/sounds/trump-Disgrace.wav';
import audio2 from '../../assets/sounds/trump-Im-Really-Rich.wav';
import audio3 from '../../assets/sounds/trump-Losers.wav';
import audio4 from '../../assets/sounds/trump-Morally-Corrupt.wav';
import audio5 from '../../assets/sounds/trump-stupid.wav';
import audio6 from '../../assets/sounds/trump-Total-Choke-artist.wav';
import audio7 from '../../assets/sounds/trump-What-the-hell.wav';
import audio8 from '../../assets/sounds/fired.mp3';


function Quote(props) {

    const mySounds = ['audio', 'audio2', 'audio3', 'audio4', 'audio5', 'audio6', 'audio7', 'audio8'];
    const before = ''

    const playSound = () => {

        let index = Math.floor(Math.random()*mySounds.length);
        var audio = document.getElementById(mySounds[index]);
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
            <audio id="audio2" src={audio2}></audio>
            <audio id="audio3" src={audio3}></audio>
            <audio id="audio4" src={audio4}></audio>
            <audio id="audio5" src={audio5}></audio>
            <audio id="audio6" src={audio6}></audio>
            <audio id="audio7" src={audio7}></audio>
            <audio id="audio8" src={audio8}></audio>
        </section>
    )
}

export default Quote;