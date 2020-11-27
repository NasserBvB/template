import React from 'react'
import DashboardWrapper from './styles'
import NavBar from './NavBar'

const DashboardLayout = ({ children }) => {
    return (
        <DashboardWrapper>
            <NavBar />
            {children}
        </DashboardWrapper>
    )
}

export default DashboardLayout; 