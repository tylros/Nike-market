import { headerLogo } from '../assets/images'
import { hamburger, shoppingBag  } from '../assets/icons'
import { navLinks } from '../constants'
function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} />
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-monserrat font-medium leading-normal text-lg text-slate-gray "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="humburger" width={25} height={25} />
        </div>
        <div className="flex max-lg:hidden items-center gap-1.5">
          <img
            src={shoppingBag}
            width={25}
            height={25}
            className="cursor-pointer "
          />
          <p className="text-lg text-slate-gray">cart(0)</p>
        </div>
      </nav>
    </header>
  );
}

export default Nav