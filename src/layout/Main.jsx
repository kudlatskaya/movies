import React from 'react';
import { Component } from 'react';
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'


class Main extends Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1094a88f&s=matrix')
        .then(respons => respons.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type) => {
        this.setState({loading: true});

        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1094a88f&s=${str}&type=${type}`)
        .then(respons => respons.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const { movies, loading } = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            
            {
                loading ? (
                    <Preloader />
                ) : (
                    <Movies movies={movies}/>
                )
            }

        </main>
    }
}

export {Main}