import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from './FriendLIst.module.css'
export function  FriendList ({friends}){
    return(
        <><ul className={css.friendList}>
{friends.map((friend)=>(
  <FriendListItem key={friend.id}
 avatar={friend.avatar}
 isOnline={friend.isOnline}
 name={friend.name}/>)
)
}</ul></>)}
       
   