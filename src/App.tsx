import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { User, UserContext } from './components/Context/userContext';
import UserContainer from './components/User/UserContainer';

const URL = "http://localhost:3001";
const id = "601920b2-ed8b-41b5-ba71-25bfe30b931f";

function App() {

  const [user, setUser] = useState<User>({} as any);

  useEffect(() => {
    axios.get(`${URL}/users/${id}`)
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
        console.log(response.data.user);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <UserContainer setUser={setUser}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
