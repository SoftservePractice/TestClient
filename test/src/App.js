
import './App.css';
import {useState} from 'react';
function Send(order)
{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ 
        order
        })  
  };
  console.log('send');
  fetch('http://localhost:3000/order/',requestOptions);
} 

function App() {
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [datetime,setDatetime] = useState('');
  const [confirmType,setConfirmType] = useState('');

  const order = {name:name,phone:phone,email:email,datetime:datetime,confirmType:confirmType,isConfirm:false}

  return (
    <div className="App">
      <div id="Form">
          <input placeholder="Name" value = {name} onChange={(e)=>setName(e.target.value)} type="text"></input>
          <input placeholder="Phone"value = {phone} onChange={(e)=>setPhone(e.target.value)} type="phone"></input>
          <input placeholder="email" value = {email} onChange={(e)=>setEmail(e.target.value)} type="email"></input>
          <input placeholder="datetime" value = {datetime} onChange={(e)=>setDatetime(e.target.value)} type="date"></input>
          <input type="checkbox" id="telegramCheckbox" name="telegram" value="Telegram" onChange={(e)=>setConfirmType(e.target.value)}></input>
          <label for="telegramCheckbox">Telegram</label>
          <br></br>
          <input type="checkbox" id="gmailCheckbox" name="gmail" value="Gmail" onChange={(e)=>setConfirmType(e.target.value)}></input>
          <label for="gmailCheckbox">Gmail</label>
          <br></br>
           <button onClick={() => {Send(order)}}>Send order</button>
      </div>
    </div>
  );  
}

export default App;
