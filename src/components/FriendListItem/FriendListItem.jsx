import css from './FriendListItem.module.css'
export function  FriendListItem ({id, avatar, name, isOnline }){
    return(
        <li className={css.item} key={id}>
  <span className={`${css.status} ${isOnline ? css.green : css.red}`}>0{isOnline}</span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>
    )
}
