import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import SongSearchbar from '../../components/SongSearchbar';
import { getUserProfile } from '../../api/user';
import { setUser } from '../../actions/users';

const Home = (props) => {
    useEffect(() => {
        getUserProfile(props.user.token)
        .then((res) => res.json())
        .then((res) => props.dispatch(setUser(res)))
    }, [props.user.token.length])

    return (
        <div>
            <SongSearchbar />
        </div>
    );
}

const mapStateToProps = state => {
    return {...state}
}

export default connect(mapStateToProps)(Home);