import React from 'react'
import { onSnapshot, collection, query, where, orderBy, or, addDoc, Timestamp } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';


export default function Messages({user, db}) {

  const [ messages, setMessages ] = useState([]);
  const [ kinek, setKinek ] = useState("");
  const [ uzenet, setUzenet ] = useState("");

  useEffect(() => {
    // where('kinek', '==', user.email))
    if(user){
      const email = user.email;
      console.log("useEffect email: " , email)
      const unsub = onSnapshot(query(collection(db, 'uzenetek'), or(where("kinek", "==", user.email), where("ki", "==", user.email)), orderBy("mikor")), (snap) => {
        setMessages(snap.docs.map(doc => ({ ...doc.data(), id:doc.id })));
      });
      return unsub;
    }
  },[user]);

  async function ujUzenet() {
    await addDoc(collection(db, "uzenetek"), { ki:user.email, kinek:kinek, uzenet:uzenet, mikor:Timestamp.now().toDate() });
  }

  return (
    <div className='messages'>
      {user ? <>
        <div className='uzenet'>
          <TextField
            required
            label="Címzett email"
            size='small'
            value={kinek}
            onChange={e => setKinek(e.target.value)}
          />
          <TextField
            required
            label="Üzenet"
            size='small'
            value={uzenet}
            onChange={e => setUzenet(e.target.value)}
          />
          <Button
            variant="contained"
            color='success'
            onClick={ujUzenet}
          >Send</Button>
      </div>
      {messages.map(x => <p key={x.id}>{x.ki} - {x.kinek} : {x.uzenet} ({x.mikor.toDate().toDateString()})</p>) }
      </>: "Jelentkezz be!"}
    </div>
  )
}
