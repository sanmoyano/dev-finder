import React from 'react'

import { UserData } from '../types'

interface Props {
  onHandlerChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  onHandlerClick: (e: React.FormEvent<HTMLFormElement>) => void
  handleToggleModal: () => void
  searchUser:UserData['login']
}

const SearchField = ({ onHandlerChange, onHandlerClick, handleToggleModal, searchUser }: Props) => {
  return (
    <div className='bg-bgColor py-2 pr-2 pl-5 rounded-lg flex-row'>
      <form className='space-x-10 align-middle justify-between flex' onSubmit={onHandlerClick}>
        <input className='inputblock w-96 text-lg focus:outline-none' placeholder='Search user...' value={searchUser} onChange={onHandlerChange} />
        <div className='flex-row space-x-5 align-middle justify-between flex'>
          <button className='bg-button rounded-md w-16 h-12' type='submit'>S</button>
          <button className='bg-button rounded-md w-12 h-12' onClick={handleToggleModal}>H</button>
        </div>
      </form>
    </div>
  )
}

export default SearchField
