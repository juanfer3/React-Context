import React, {useContext, useEffect} from 'react';
import {ClientContext} from './ClientContext'

function ClientList(props) {
    
    const { user, setUser } = useContext(ClientContext) 

 
    const changeName = () => {
        setUser({name: 'Julia', age: 14})
    }

    console.log(user);
    

  return (
    <div className="">
        {user.name}
        <button onClick={() => changeName()}>
            clickMe!!
        </button>
    </div>
  );
}

export default ClientList;

