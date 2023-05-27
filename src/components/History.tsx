import React from 'react'

import { UserData } from '../types'
interface Props {
  historyData: UserData[]
  openModal: boolean
}

const History = ({ historyData, openModal } : Props) => {
  return (
    <div className={`${openModal ? 'flex' : 'hidden'}`}>History</div>
  )
}

export default History
