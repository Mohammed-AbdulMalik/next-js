import React from 'react'
import Link from 'next/link'

const StudentList = () => {
  return (
    <div>
      i am main page
      <ul>
        <li><Link href='/studentlist/anil'>Anil</Link></li>
        <li><Link href='/studentlist/sam'>sam</Link></li>
        <li><Link href='/studentlist/peter'>peter</Link></li>
        <li><Link href='/studentlist/bruce'>bruce</Link></li>
     </ul>
    </div>
  )
}

export default StudentList
