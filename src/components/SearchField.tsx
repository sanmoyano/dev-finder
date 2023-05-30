import React from 'react'
import { faMagnifyingGlass, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { UserData } from '../types'

interface Props {
  onHandlerChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  onHandlerClick: (e: React.FormEvent<HTMLFormElement>) => void
  handleToggleModal: () => void
  searchUser:UserData['login']
}

const SearchField = ({ onHandlerChange, onHandlerClick, handleToggleModal, searchUser }: Props) => {
  return (
    <div className='bg-bgColor py-1 pr-1 pl-5 rounded-md border border-gitGray flex-row focus-within:border-gitBlue'>
      <form className='space-x-10 item-center justify-between flex' onSubmit={onHandlerClick}>
        <input className='input block bg-[transparent] text-sm font-bold font-mono focus:outline-none placeder:font-mono placeholder:text-gitGray' placeholder='Search developer...' value={searchUser} onChange={onHandlerChange} />
        <div className='flex-row space-x-1 align-middle justify-between flex'>
          <span title='search'>
            <button className='bg-[transparent] hover:bg-button rounded-lg w-14 h-10' type='submit'>
              <FontAwesomeIcon fontSize='1.2rem' icon={faMagnifyingGlass} />
            </button>
          </span>
          <span title='history'>
            <button className='bg-button hover:bg-gitGray rounded-lg w-10 h-10' onClick={handleToggleModal}>
              <FontAwesomeIcon fontSize='1.2rem' icon={faClockRotateLeft} />
            </button>
          </span>
        </div>
      </form>
    </div>
  )
}

export default SearchField
