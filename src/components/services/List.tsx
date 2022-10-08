import React from 'react';
import { User } from '../../type';

interface Props{
    users: Array<User>
}

const List = ({users}: Props) => {
  return (
    <>
         <ul>
        {
          users.map((user)=> (
            <li key={user.nick}>
              <img src={user.avatar}  alt={`Avatar for ${user.nick}`} />
              <h4>{user.nick}(<small>{`${user.salary} USD`}</small>)</h4>
               <p>{user.description?.substring(0,50)}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export default List;