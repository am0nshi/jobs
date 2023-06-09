import { Link } from '@inertiajs/react'
import React from 'react'
export interface EditTopbarItemProps {
  text: string;
  href: string;
  className: string;
}
const EditTopbarItem: React.FC<EditTopbarItemProps> = ({ text, href, className }) => {
  return (
    <li className="nav-item" >
      <Link href={href}
        className={className}
      ><span></span>
        {text}
      </Link>
    </li>
  )
}

export default EditTopbarItem