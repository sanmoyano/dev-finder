import React from 'react'

import { UserData } from '../types'
interface Props {
  historyData: UserData[]
}

const History = ({ historyData } : Props) => {
  return (
    <div>History</div>
  )
}

export default History
