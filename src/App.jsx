import React from 'react'
import Navbar from './components/Navbar'
import Current from './components/Current'
import Card from './components/Card'
import { useContext } from 'react'
import { Context } from './context/Context'
import Loader from './components/Loader'
import Daily from './components/Daily'
// import ContextProvider from './context/Context'

function App() {
  const {data} = useContext(Context)
  if(data.length <= 0 || !data.current || !data.daily) return <Loader/>
  return (
    <>
      <Navbar/>
      <Current data={data.current}/>
      <Daily data={data}/>
    </>
  )
}

export default App