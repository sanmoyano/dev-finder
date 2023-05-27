import React, { useState, useEffect } from 'react'

import { UserData } from './types'

const App = () => {
  const [user, setUser] = useState<UserData>({}as UserData)
  const [searchUser, setUserSearch] = useState<UserData['login']>('')
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState<boolean>(false)

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`https://api.github.com/users/${searchUser}`)
      const userData = await res.json()

      const history = localStorage.getItem('searchHistory')
      const searchHistory = history ? JSON.parse(history) : []
      const isDuplicated = searchHistory.some((item:UserData) => item.id === userData.id)

      if (!isDuplicated) {
        searchHistory.push(userData)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
      }

      setUser(userData)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
    setUserSearch('')
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUserSearch(e.target.value)
  }

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory')

    if (storedHistory) {
      setHistory(JSON.parse(storedHistory))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(history))
  }, [history])

  return (
    <div className='flex flex-col justify-between h-200px space-y-5'>
      <form onSubmit={handleClick}>
        <input className='inputblock w-full text-lg p-2' placeholder='Search user...' value={searchUser} onChange={handleOnChange} />
        <button type='submit'>search</button>
      </form>
      <p className='text-xl'>{user.name}</p>
    </div>
  )
}

export default App
