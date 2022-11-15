import React, { Component, useState, useEffect } from 'react';
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
        .then(respons => respons.json())
        .then(data => {
                setMovies(data.Search);
                setLoading(false)
            })
        .catch((err) => {
            console.error(err);
            setLoading(false)
        })
    },[]);

    const searchMovies = (str, type) => {
        setLoading(true);

        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}&type=${type}`)
        .then(respons => respons.json())
        .then(data => {
                setMovies(data.Search);
                setLoading(false)
            })
        .catch((err) => {
            console.error(err);
            setLoading(false)
        })
    }

        
        return <main className="container content">
            <Search searchMovies={searchMovies}/>
            
            {
                loading ? (
                    <Preloader />
                ) : (
                    <Movies movies={movies}/>
                )
            }

        </main>
}

// class Main extends Component {
//     state = {
//         movies: [],
//         loading: true
//     }

//     componentDidMount() {
//         fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
//         .then(respons => respons.json())
//         .then(data => this.setState({movies: data.Search, loading: false}))
//         .catch((err) => {
//             console.error(err);
//             this.setState({ loading: false })
//         })
//     }

//     searchMovies = (str, type) => {
//         this.setState({loading: true});

//         fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}&type=${type}`)
//         .then(respons => respons.json())
//         .then(data => this.setState({movies: data.Search, loading: false}))
//         .catch((err) => {
//             console.error(err);
//             this.setState({ loading: false })
//         })
//     }

//     render() {
//         const { movies, loading } = this.state;

//         return <main className="container content">
//             <Search searchMovies={this.searchMovies}/>
            
//             {
//                 loading ? (
//                     <Preloader />
//                 ) : (
//                     <Movies movies={movies}/>
//                 )
//             }

//         </main>
//     }
// }

export {Main}