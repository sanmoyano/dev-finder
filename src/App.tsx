import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import SearchField from './components/SearchField'
import Card from './components/Card'
import History from './components/History'
import Footer from './components/Footer'
import { UserData } from './types'

const App = () => {
  const [user, setUser] = useState<UserData>({}as UserData)
  const [searchUser, setUserSearch] = useState<UserData['login']>('')
  const [history, setHistory] = useState<UserData[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [fav, setFav] = useState<{ [key: number]: boolean }>({})

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`https://api.github.com/users/${searchUser}`)
      const userData = await res.json()

      if (userData.message === 'Not Found') {
        console.log('Not found')
      } else {
        const history = localStorage.getItem('searchHistory')
        const searchHistory = history ? JSON.parse(history) : []
        const isDuplicated = searchHistory.some((item:UserData) => item.id === userData.id)

        setHistory(searchHistory)

        if (!isDuplicated) {
          searchHistory.push(userData)
          localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
        }

        setUser(userData)
      }
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

  const handleToggleModal = () => {
    setOpenModal(!openModal)
  }

  const handleFav = (userId: number) => {
    setFav((prevFav) => {
      return {
        ...prevFav,
        [userId]: !prevFav[userId]
      }
    })
  }

  const deleteHistory = () => {
    localStorage.clear()
    setHistory([])
    setUser({} as UserData)
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
    <main>
      <div className='flex flex-col p-10 justify-between space-y-5 w-[600px]'>
        <Header />
        <SearchField handleToggleModal={handleToggleModal} searchUser={searchUser} onHandlerChange={handleOnChange} onHandlerClick={handleClick} />
        {user.login
          ? (<Card data={user} />)
          : isLoading
            ? (<p>cargando...</p>)
            : (<p className='text-center font-mono text-white text-sm'>Search for a developer by their username</p>)}
      </div>
      <History cleanHistory={deleteHistory} fav={fav} handleFav={handleFav} historyData={history} openModal={openModal} />
      <Footer />
    </main>
  )
}

export default App
