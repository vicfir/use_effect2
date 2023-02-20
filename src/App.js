import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card';

function App() {
  const [users, setUsers]=useState([]);
  const [selectedUser, setSelectedUser]=useState("");

  // chargement des données depuis le fichier json
  useEffect(() => {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);
  console.log(users);

  // 
  const btnSelectUser = (id) => {
    setSelectedUser(users.find(user => user.id === id));
  }
  console.log(selectedUser);

  return (
    <div className="App">
      <button onClick={()=>{btnSelectUser(1)}}>Utilisateur1</button>
      <button onClick={()=>{btnSelectUser(2)}}>Utilisateur2</button>
      <button onClick={()=>{btnSelectUser(3)}}>Utilisateur3</button>
      <Card name={selectedUser.name} email={selectedUser.email} city={selectedUser.city}/>
    </div>
  );
}

export default App;
