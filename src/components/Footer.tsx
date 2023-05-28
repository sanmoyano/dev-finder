
const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <p className='text-center text-xs text-gitGray font-mono'>{`${date} - Designed and developed with ❤️ - `}<a className='hover:text-gitBlue hover:underline' href='https://www.linkedin.com/in/santiago-moyano/' rel='noreferrer' target='_blank'>Santiago Moyano</a></p>
  )
}

export default Footer
