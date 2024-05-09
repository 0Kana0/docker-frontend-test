import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(0)

  const url = import.meta.env.VITE_API + '/helloworld';

  useEffect(() => {
    axios.get(url)
      .then(response => {
        // พิมพ์ข้อมูลที่ได้รับจาก response
        console.log('Response data:', response.data);
        setUsers(response.data)
      })
      .catch(error => {
        // พิมพ์ข้อผิดพลาด (error) ที่เกิดขึ้น
        console.error('Error fetching data:', error);
      });
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{users.msg}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
