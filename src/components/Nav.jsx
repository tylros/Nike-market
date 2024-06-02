import { headerLogo } from '../assets/images'
import { hamburger  } from '../assets/icons'
import { navLinks } from '../constants'
function Nav() {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container' >
     <a href="/">
      <img
       src={headerLogo}
      />
     </a>
     <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
      {navLinks.map((link) => (
       <li key={link.label}>
        <a href={link.href} className='font-monserrat leading-normal text-lg text-slate-gray '>
         {link.label}
        </a>
     </li>
   ))}
     </ul>
     <div className='hidden max-lg:block'>
      <img
       src={hamburger}
       alt='humburger'
       width={25}
       height={25}
      />
     </div>
    </nav>
   </header>
  )
}

export default Nav