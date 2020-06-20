import React from 'react';
import Dropdown from './Dropdown';
import _ from 'lodash';


const createDebouncedFn = (fn) => {
    const debouncedFn = _.debounce(fn, 1000);
    return () => debouncedFn;
}

export default class Searchbar extends React.Component {
    state = {
        query: '',
        result: []
    }

    handleSubmit = () => {
    }


    handleChange = (e) => {
        createDebouncedFn(this.loadTracks)()();
        const nextState = { ...this.state };
        nextState[e.target.id] = e.target.value;
        this.setState(() => nextState);
    }

    loadTracks = () => {
        if (this.state.query) {
            const query = this.state.query.split(' ').join('%20')
            fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`, {
                headers: {
                    'Authorization': 'Bearer ' + this.props.token
                },
            })
                .then((res) => res.json())
                .then((res) => this.setState(() => ({ result: res.tracks.items })))
        } else {
            this.setState(() => ({ result: [] }))
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="searchbar" id="query" type="text" value={this.state.query} onChange={this.handleChange} />
                <Dropdown tracks={this.state.result} />
            </form>
        );
    }
}