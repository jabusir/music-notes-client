import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Profile = ({user}) => {
    const userPayload = user.user
    return (
        <div>
            {userPayload.username}
        </div>
    );
}

const mapStateToProps = state => {
    return {...state}
}

export default connect(mapStateToProps)(Profile);