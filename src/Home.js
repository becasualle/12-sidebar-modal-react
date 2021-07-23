import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {

  // get functions from context for showing Sidebar and Modal
  const { showSidebar, showModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={showSidebar}><FaBars /></button>
      <button className="btn" onClick={showModal}>Show modal</button>
    </main>
  )
}

export default Home
