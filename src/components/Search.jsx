import React  from "react";


class Search extends React.Component {
    state = {
        search: '',
        type: ''
    }

    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }

    }

    handleFilter = (event) => {
        this.setState({type: event.target.dataset.type})
    }

    
    render() {
        return <div className="row">
            <div className="input-field">
                <input 
                    placeholder='search' 
                    type="search" 
                    className="validate" 
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button className="btn search-btn" onClick={() => {this.props.searchMovies(this.state.search, this.state.type)}}>Search</button>
            </div>
            <div>
                <label className="movies-type">
                    <input className="with-gap" name="type" type="radio"  data-type='' onChange={this.handleFilter} checked/>
                    <span>All</span>
                </label>
                <label className="movies-type">
                    <input className="with-gap" name="type" type="radio" data-type='movie' onChange={this.handleFilter}/>
                    <span>Movies only</span>
                </label>
                <label className="movies-type">
                    <input className="with-gap" name="type" type="radio" data-type='series' onChange={this.handleFilter}/>
                    <span>Series only</span>
                </label>
            </div>
           
        </div>
    }
}

export {Search}