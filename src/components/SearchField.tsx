import React from 'react'

import { UserData } from '../types'

interface Props {
  onHandlerChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  onHandlerClick: (e: React.FormEvent<HTMLFormElement>) => void
  searchUser:UserData['login']
}

const SearchField = ({ onHandlerChange, onHandlerClick, searchUser }: Props) => {
  return (
    <div className='bg-bgColor py-2 pr-2 pl-5 rounded-lg'>
      <form className='space-x-10 align-middle justify-between flex' onSubmit={onHandlerClick}>
        <input className='inputblock w-96 text-lg focus:outline-none' placeholder='Search user...' value={searchUser} onChange={onHandlerChange} />
        <button className='bg-button rounded-md w-16 h-12' type='submit'>S</button>
      </form>
    </div>
  )
}

export default SearchField
