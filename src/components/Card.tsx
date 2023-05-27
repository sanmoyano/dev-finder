import { UserData } from '../types'

interface Props {
  data: UserData
}

const Card = ({ data }: Props) => {
  const { login, avatar_url: avatar, bio, blog, company, email, followers, following, name, public_repos: repos, twitter_username: twitter } = data

  return (
    <div className='flex-row'>
      <p>{login}</p>
      <img src={`uri(${avatar})`} />
      <p>{bio}</p>
      <p>{blog}</p>
      <p>{company}</p>
      <p>{email}</p>
      <p>{followers}</p>
      <p>{following}</p>
      <p>{name}</p>
      <p>{repos}</p>
      <p>{twitter}</p>
    </div>
  )
}

export default Card
