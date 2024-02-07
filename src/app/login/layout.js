import React from 'react'
import Link from 'next/link'
import "./login.css"

const Layout = ({children}) => {
  return (
    <div>
        <nav>
            <ul className='list'>
                <li><Link href="/login">Go to main login</Link></li>
                <li><Link href="/login/loginstudent">Go to  student main login</Link></li>
                <li><Link href="/login/loginteacher">Go to  teacher main login</Link></li>
            </ul>
        </nav>
        {children}
    </div>
  )
}

export default Layout
