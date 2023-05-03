import React from 'react'
import './Layout.css'
import { SidebarMenu } from '../Data/data'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Avatar, Badge } from 'antd'

const Layout = ({ children }) => {
  const { doctor } = useSelector(state => state.doctor)

  const location = useLocation()

  return (
    <>
      <div className='maiin'>
        <div className='layouut'>
          <div className='siidebaar'>
            <div className='log'>
              <h6>Doctor</h6>
              <hr />
            </div>
            <div className='menuu'>
              {SidebarMenu.map((menu, index) => {
                const isActive = location.pathname === menu.path
                return (
                  <div
                    key={index}
                    className={`mennuuu-iteem ${isActive && 'actiive'}`}
                    onClick={menu.onClick} // check if onClick is defined and add it as a click handler
                  >
                    <i className={menu.icon}> </i>
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='connntent'>
            <div className='heaadrr'>
              <div className='heaadrr-connntent'>
                <Badge count={doctor?.notification.length}>
                  <i className='fa-solid fa-ball'></i>
                </Badge>
                <i className='fa-solid fa-bell'></i>
                <Link to='/doctorapp'>{doctor?.email}</Link>
              </div>
            </div>
            <div className='boodyy'>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
