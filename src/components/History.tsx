import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as StrokeFaStart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { UserData } from '../types'
interface Props {
  historyData: UserData[]
  openModal: boolean
  fav: boolean
  handleFav: (id: number) => void
}

const History = ({ historyData, openModal, fav, handleFav } : Props) => {
  return (
    <div className={`${openModal ? 'translate-x-0' : 'translate-x-[100%]'} ease-out duration-200 absolute top-0 right-0 bg-gitGray h-screen w-[320px] mt-0`}>
      {historyData?.map((user) => (
        <div key={user.id} className='hover:bg-button' onClick={() => handleFav(user.id)}>
          <div className='flex flex-row justify-start space-x-3 items-center px-5 py-2'>
            <img alt={`${user.name}`} className='w-12 h-12 rounded-full' src={`${user.avatar_url}`} />
            <div className='flex flex-col w-[100%]'>
              <h1 className='font-mono font-bold text-lg text-left'>{user.name}</h1>
              <div className='block w-0'>
                <a className='font-mono text-base text-gitBlue text-left' href={`https://github.com/${user.login}`} rel='noreferrer' target='_blank'>/{user.login}</a>
              </div>
            </div>
            {fav
              ? <FontAwesomeIcon fontSize='1rem' icon={faStar} />
              : <FontAwesomeIcon fontSize='1rem' icon={StrokeFaStart} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default History
