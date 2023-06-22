import React from 'react'
import Logo from './Logo'

type Props = {
}

export default function Header({}: Props) {
  return (
    <div className='border-gray-500'>
      <Logo />
    </div>
  )
}