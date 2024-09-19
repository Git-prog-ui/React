import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    try {
      fetch("http://localhost:4000/data")
      .then((data) => {
         return data.json();
      })
      .then((data) =>{
        data = data.map(user => {
          user.points = 0;
          if (user.amount > 50) user.points += user.amount - 50;
          if (user.amount > 100) user.points += user.amount - 100;
          return user;
         });
         setData(data);
      }) 
      }
      catch (err) {
        console.error("Error in fetching data");
        return [];
      }
      return () => {
        setData([]);
      };
    }, []);
  return (
    <>
      <table>
        <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Points</th>
        </tr>
        {data.map((item, index) => (<tr key={index}><td>{item.name}</td><td>{item.amount}</td><td>{item.points}</td></tr>))}
      </table>
    </>
  )
}

export default App
