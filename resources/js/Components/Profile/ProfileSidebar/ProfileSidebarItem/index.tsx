import { Link } from '@inertiajs/react'
import React, { ReactNode } from 'react'
export interface ProfileSidebarItemProps {
  href: string;
  className: string;
  children: ReactNode;
  title: string
}
const ProfileSidebarItem: React.FC<ProfileSidebarItemProps> = ({ href, className, children, title }) => {
  return (
    <li>
      <Link
        className={className}
        href={href}>
        {children}
        {title}
      </Link>
    </li>
  )
}

export default ProfileSidebarItem