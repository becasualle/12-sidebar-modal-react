import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

// use children object to get this component ready for wrapping 
const AppProvider = ({ children }) => {
    // create states and functions for showing and hiding modal and sidebar
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const showSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        // provide all states and functions as value for using in child components - Home, Modal, Sidebar
        <AppContext.Provider value={{ isModalOpen, isSidebarOpen, showModal, showSidebar, closeModal, closeSidebar }}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook for importing only useGlobalContext Hook instead of useContext and AppProvider
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }