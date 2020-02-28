import axios from 'axios';
import React from 'react';
import './display.scss';
import Quote from '../components/Quote/quote';
import Gif from '../components/GIF/gif';
import Header from '../components/Header/header';

class Display extends React.Component {

    api = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=';

    state = {
        name: '',
        newRequest: false,
        diss: '',
        gif: ''
    }

    refresh() {
        this.setState({
            newRequest:true
        })
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
            let message = resultsArray[0].data.message;
            let gif = resultsArray[1].data;
            this.setState({
                name: formatted,
                diss: message,
                gif: gif
            })

        })
    }

    componentDidUpdate() {
        if (this.state.newRequest) {
            axios.all(
                [
                    axios.get(this.api+this.state.name),
                    axios.get('http://localhost:5000/')
                ]
            ).then(resultsArray => {
                let message = resultsArray[0].data.message;
                let gif = resultsArray[1].data;
                this.setState({
                    diss: message,
                    gif: gif,
                    newRequest: false
                })
    
            })
        }
    }

    render() {
        return (
            <main className='display'>
                <Header handler={this.refresh.bind(this)}/>
                <Gif image={this.state.gif}/>
                <Quote diss={this.state.diss}/>
            </main>
        )
    }
}

export default Display;