import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Profile = ({ user }) => {
    const userPayload = user.user
    const [requestListShowing, setRequestListShowing] = useState(false)
    return (
        <div>
            <div>
                {userPayload.username}
            </div>
            <div onClick={() => setRequestListShowing(true)}>Friend requests: {userPayload.friendRequestsRecieved.length}</div>
            {requestListShowing && userPayload.friendRequestsRecieved.map((request) => <div>{request}</div>)}
        </div>
    );
}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps)(Profile);