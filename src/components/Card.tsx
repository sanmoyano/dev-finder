import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { UserData } from '../types'

interface Props {
  data: UserData
}

const Card = ({ data }: Props) => {
  const { login, avatar_url: avatar, bio, blog, company, followers, following, name, public_repos: repos, twitter_username: twitter, location } = data

  return (
    <div className='flex-col flex p-5 bg-gitBlack border justify-between border-gitGray rounded-lg h-[350px]'>
      <div className='flex flex-row space-x-5 items-center w-full'>
        <img alt={`${name}`} className='w-24 h-24 rounded-full' src={`${avatar}`} />
        <div className='justify-center item-center space-y-2 w-full'>
          <div className='flex flex-row items-center space-x-3'>
            <h1 className='font-mono font-bold text-lg'>{name}</h1>
            <span title='GitHub'>
              <a className='font-mono text-base text-gitBlue hover:underline' href={`https://github.com/${login}`} rel='noreferrer' target='_blank'>/{login}</a>
            </span>
          </div>
          <h2 className='font-mono text-sm'>{bio}</h2>
        </div>
      </div>
      <div className='flex flex-row justify-between w-full'>
        {twitter || company
          ? (
            <div className='flex flex-col space-y-2 w-[50%]'>
              {twitter && (
                <a href={`https://twitter.com/${twitter}`} rel='noreferrer' target='_blank'>
                  <p className='text-sm font-mono align-text-top font-bold hover:text-gitBlue '>
                    <FontAwesomeIcon fontSize='1rem' icon={faTwitter} style={{ marginRight: 10 }} />
                    {twitter}
                  </p>
                </a>
              )}

              {company && (
                <p className='text-sm font-mono align-text-top font-bold'>
                  <FontAwesomeIcon fontSize='1rem' icon={faBuilding} style={{ marginRight: 10 }} />
                  {company}
                </p>
              )}
            </div>
            )
          : null}
        {blog || location
          ? (
            <div className='flex flex-col space-y-2 w-[50%]'>
              {blog && (
                <a href={`${blog}`} rel='noreferrer' target='_blank'>
                  <p className='text-sm font-mono align-text-top font-bold hover:text-gitBlue truncate'>
                    <FontAwesomeIcon fontSize='1rem' icon={faGlobe} style={{ marginRight: 10 }} />
                    {blog}
                  </p>
                </a>
              )}
              {location && (
                <p className='text-sm font-mono align-text-top font-bold'>
                  <FontAwesomeIcon fontSize='1rem' icon={faLocationDot} style={{ marginRight: 10 }} />
                  {location}
                </p>
              )}
            </div>
            )
          : (null)}
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='justify-start space-y-1'>
          <p className='font-mono font-bold text-sm'>Repos</p>
          <p className='font-mono font-bold text-lg bg-gitGray rounded-full text-center'>{repos}</p>
        </div>
        <div className='justify-start space-y-1'>
          <p className='font-mono font-bold text-sm'>Followers</p>
          <p className='font-mono font-bold text-lg'>{followers}</p>
        </div>
        <div className='justify-start space-y-1'>
          <p className='font-mono font-bold text-sm'>Followings</p>
          <p className='font-mono font-bold text-lg'>{following}</p>
        </div>
      </div>
      <div className='flex justify-end items-center space-x-5'>
        <span title='save card as image'>
          <button className='text-gitGreen border hover:bg-gitGreen hover:text-white border-gitGreen py-1 px-2 rounded-full font-bold font-mono text-xs' onClick={() => console.log('copy image dev')}>Save Dev</button>
        </span>
      </div>
    </div>
  )
}

export default Card
