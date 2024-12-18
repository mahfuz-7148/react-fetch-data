import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import UserData from './pages/UserData'

function App() {

  const [allData, setAllData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
  },[])

  return (

    <div className='border-2 border-blue-600 grid grid-cols-2 p-10 m-10'>
     { allData.map(data => 
       <UserData 
       key={data.id}
       data = {data}
       />
    )}
    </div>
  )
}

export default App