import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './App.css';
import { INITIAL_STATE } from './components/data/data';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/services/List';
import { User } from './type';
// import Welcome from './components/Welcome';

interface AppState {
  user: Array<User>
  newUser: number
}


const App = () => {
  const courseName = "Application development";
  const [users, setUsers] = useState<AppState["user"]>([]);
  const [newUsers, setNewUsers] = useState<AppState["newUser"]>(0);
  //va a guardar un valor entre renderizados, pero no va a causar un renderizado
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(()=> {
   setUsers(INITIAL_STATE)
  },[]);

  //setUsers nunca va a para abajo
  //Lo mejor es pasar una funcion
  const handleNewUsers = (newUsers: User): void => {
     setUsers(users => [...users, newUsers]);
  };
  
  return (
    <>
    <Header name={courseName} />
    <div className="App" ref={divRef} >
     {/* <Welcome name= "Alan" /> */}
     <div className='div-list'>
     <List users={users} />
     </div>
     <div className='div-form'>
     <Form onNewUser={handleNewUsers}/>
     </div>
    </div>
    </>
  );
}

export default App;
