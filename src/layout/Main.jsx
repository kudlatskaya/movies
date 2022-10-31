import React from 'react';
import { Component } from 'react';
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

class Main extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1094a88f&s=matrix')
        .then(respons => respons.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return <main className="container content">
            <Search />
            
            {
                movies.length ? (
                    <Movies movies={movies}/>
                ) : <Preloader />
            }

        </main>
    }
}

export {Main}