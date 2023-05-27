import React from 'react'

import { UserData } from '../types'

interface Props {
  onHandlerChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  onHandlerClick: (e: React.FormEvent<HTMLFormElement>) => void
  searchUser:UserData['login']
}

const SearchField = ({ onHandlerChange, onHandlerClick, searchUser }: Props) => {
  return (
    <form onSubmit={onHandlerClick}>
      <input className='inputblock w-full text-lg p-2' placeholder='Search user...' value={searchUser} onChange={onHandlerChange} />
      <button type='submit'>search</button>
    </form>
  )
}

export default SearchField
