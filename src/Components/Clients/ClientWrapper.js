import React, {useState} from 'react';

import {ClientContext} from './ClientContext'
import ClientList from './ClientList'
import ClientProfile from './ClientProfile'
function ClientWrapper(props) {
    
    const [user, setUser] = useState({name: "Tania", age: 14})
  return (
    <div className="">
      <ClientContext.Provider
			value={{
              user,
              setUser
			}}
		  >
			<ClientList />
      <ClientProfile />
      {user.name}
		</ClientContext.Provider>
    </div>
  );
}

export default ClientWrapper;
