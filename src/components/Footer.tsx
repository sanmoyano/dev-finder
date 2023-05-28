
const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <p className='text-center text-xs text-gitGray font-mono'>{`${date} - Designed and developed with ❤️ - Santiago Moyano`}</p>
  )
}

export default Footer
