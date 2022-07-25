import React from 'react';
import { PropTypes } from "prop-types";
import { FriendsListItem } from './FriendsListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({friends}) => {
    console.log(friends);
    return (<ul className={css.friendList}>
        {friends.map(friend => (
        <FriendsListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />
            
          
 ))}
</ul>)

};
 
FriendsList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// style={{ backgroundColor: isOnline ? " #54d35d" : " #cb2219" }}