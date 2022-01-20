import logo from '../asset/logo.png'

export const Header = () => {
  const title = 'La maison jungle';
  return (<header className='lmj-banner'>
    <img src={logo} alt="logo de la maison jungle" className='lmj-logo' />
    <h1 className="lmj-title">{title}</h1>
  </header>)
  
}

