import axios from 'axios';
import React from 'react';
import './display.scss';
import Quote from '../components/Quote/quote';
import Gif from '../components/GIF/gif';

class Display extends React.Component {

    api = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=';

    state = {
        name: '',
        newRequest: false,
        diss: ''

    }

    componentDidMount() {
        let unformatted = this.props.location.search;
        let index = unformatted.indexOf('=');
        let formatted = unformatted.slice(index+1);

        axios.all(
            [
                axios.get(this.api+formatted),
                axios.get('http://localhost:5000/')
            ]
        ).then(resultsArray => {
            console.log(resultsArray)
        })


        /*axios.get(this.api+formatted).then(res => {
            this.setState(
                {
                    name: formatted,
                    diss: res.data.message
                }
            )
        })*/
    }

    render() {
        return (
            <main className='display'>
                <Gif />
                <Quote diss={this.state.diss}/>
            </main>
        )
    }
}

export default Display;