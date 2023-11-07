import styles from './Navbar.module.css'
import { ActiveLink } from "./ActiveLink"

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={ styles['menu-container'] }>
      {
        menuItems.map( (menuItem) => {
          return (
            <ActiveLink href={menuItem.href} text={menuItem.text} key={menuItem.href} />
          )
        })
      }
    </nav>
  )
}
