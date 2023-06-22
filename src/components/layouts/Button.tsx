import React from 'react'

type Props = {
  text: string
}

export default function Button(props: Props) {
  return (
    <div className='border-gray-500'>
      {props.text}
    </div>
  )
}