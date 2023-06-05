import React from 'react'
import UsersNav from '../components/UsersNav'
import UserPersInfo from '../components/UserPersInfo'
import TicketSum from '../components/TicketSum'
import "../styles/userInfoPage/userInfo.css"

export default function UsersInfoPage() {
  return (
    <div className='w-100 '>UsersInfoPage
      <UsersNav />
      <div className="User_info">
        <div className="UserPI "><UserPersInfo /></div>
        <div className="TickSum "><TicketSum /></div>
      </div>
    </div>
  )
}
