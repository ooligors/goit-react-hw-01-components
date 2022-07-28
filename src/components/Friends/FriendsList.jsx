import React from 'react';
import { PropTypes } from "prop-types";
import { FriendsListItem } from './FriendsListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({friends}) => {
    console.log(friends);
    return (<ul className={css.friendList}>
        {friends.map(({avatar,name,isOnline,id}) => (
        <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
            
          
 ))}
</ul>)

};
 
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
    ).isRequired,
};
// style={{ backgroundColor: isOnline ? " #54d35d" : " #cb2219" }}