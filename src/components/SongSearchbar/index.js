import React from 'react';
import Dropdown from '../Dropdown';
import styled from 'styled-components';
import StyledForm from '../StyledForm'
import _ from 'lodash';

const Searchbar = styled.input`
    width: 80%;
    height: 100px;
    font-size: 75px;
`
const CustomForm = styled(StyledForm)`
    height: 100%;
`

const createDebouncedFn = (fn) => {
    const debouncedFn = _.debounce(fn, 1000);
    return () => debouncedFn;
}

export default class SongSearchbar extends React.Component {
    state = {
        query: '',
        tracks: [],
        token: ''
    }

    componentDidMount() {
        fetch('http://localhost:3001/spotify/token')
        .then((res) => res.json())
        .then((res) => this.setState(() => ({ token: res})))
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
            fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
                headers: {
                    'Authorization': 'Bearer ' + this.state.token.access_token
                },
            })
                .then((res) => res.json())
                .then((res) => this.setState(() => ({ tracks: res.tracks.items })))
        } else {
            this.setState(() => ({ tracks: [] }))
        }
    }


    render() {
        return (
            <CustomForm onSubmit={this.handleSubmit}>
                <Searchbar className="searchbar" id="query" type="text" value={this.state.query} onChange={this.handleChange} />
                <Dropdown tracks={this.state.tracks} />
            </CustomForm>
        );
    }
}