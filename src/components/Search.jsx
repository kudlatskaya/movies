import React, {useState}  from "react";

function Search(props) {
    const {searchMovies = Function.prototype} = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('');

    const handleKey = (event) => {
        if(event.key === 'Enter') {
            searchMovies(search, type);
        }

    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, type);
    }

    
     return <div className="row">
            <div className="input-field">
                <input 
                    placeholder='search' 
                    type="search" 
                    className="validate" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button className="btn search-btn" onClick={() => {searchMovies(search, type)}}>Search</button>
            </div>
            <div>
                <label className="movies-type">
                    <input className="with-gap" name="type" type="radio"  data-type='' onChange={handleFilter} checked={type===''}/>
                    <span>All</span>
                </label>
                <label className="movies-type">
                    <input className="with-gap" name="type" type="radio" data-type='movie' onChange={handleFilter} checked={type==='movie'}/>
                    <span>Movies only</span>
                </label>
                <label className="movies-type">
                    <input className="with-gap" name="type" type="radio" data-type='series' onChange={handleFilter} checked={type==='series'}/>
                    <span>Series only</span>
                </label>
            </div>
           
        </div>
    
}

// class Search extends React.Component {
//     state = {
//         search: '',
//         type: ''
//     }

//     handleKey = (event) => {
//         if(event.key === 'Enter') {
//             this.props.searchMovies(this.state.search, this.state.type);
//         }

//     }

//     handleFilter = (event) => {
//         this.setState({type: event.target.dataset.type})
//     }

    
//     render() {
//         return <div className="row">
//             <div className="input-field">
//                 <input 
//                     placeholder='search' 
//                     type="search" 
//                     className="validate" 
//                     value={this.state.search}
//                     onChange={(e) => this.setState({search: e.target.value})}
//                     onKeyDown={this.handleKey}
//                 />
//                 <button className="btn search-btn" onClick={() => {this.props.searchMovies(this.state.search, this.state.type)}}>Search</button>
//             </div>
//             <div>
//                 <label className="movies-type">
//                     <input className="with-gap" name="type" type="radio"  data-type='' onChange={this.handleFilter} checked/>
//                     <span>All</span>
//                 </label>
//                 <label className="movies-type">
//                     <input className="with-gap" name="type" type="radio" data-type='movie' onChange={this.handleFilter}/>
//                     <span>Movies only</span>
//                 </label>
//                 <label className="movies-type">
//                     <input className="with-gap" name="type" type="radio" data-type='series' onChange={this.handleFilter}/>
//                     <span>Series only</span>
//                 </label>
//             </div>
           
//         </div>
//     }
// }

export {Search}