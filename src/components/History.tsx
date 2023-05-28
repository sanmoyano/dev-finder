import { UserData } from '../types'
interface Props {
  historyData: UserData[]
  openModal: boolean
}

const History = ({ historyData, openModal } : Props) => {
  return (
    <div className={`${openModal ? 'translate-x-0' : 'translate-x-[100%]'} ease-out duration-200 absolute top-0 right-0 bg-gitGray h-screen w-[320px] p-5`}>
      {historyData.map((user) => (
        <div key={user.id} className='flex flex-row justify-between'>
          <img alt={`${user.name}`} className='w-24 h-24 rounded-full' src={`${user.avatar_url}`} />
          <div className='flex fle-col'>
            <p>{user.name}</p>
            <p>{user.login}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default History
