import React, {useContext, useEffect} from 'react';
import {ClientContext} from './ClientContext'

function ClientProfile(props) {
    
    const { user } = useContext(ClientContext) 

 

    

  return (
    <div className="">
        {user.name}
    </div>
  );
}

export default ClientProfile;