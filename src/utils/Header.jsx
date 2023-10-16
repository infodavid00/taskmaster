import React from 'react'
import "../App.css"
import { Menu, Moon, Sun } from 'react-feather'
import { CheckTheme, DarkTheme, LightTheme} from './Theme'

export default function Header() {
  const theme = CheckTheme()

  return (
   <header className="app-header-a">
     <section>
        <h4 style={{fontFamily: 'tajawal',fontSize:'18px', color:'var(--app-bgB)'}} onClick={()=> window.location.href = '/'}>Taskmaster</h4>
        <ul className="material-widescreensonly app-header-a-navlists">
        <li onClick={()=> window.location.href = '#tools'}>Tools</li>
        <li onClick={()=> window.location.href = '#about'}>About</li>
        <li onClick={()=> window.location.href = '#contact'}><a href="mailto:da40au40@gmail.com" style={{color:'inherit',textDecoration:'none'}}>Contact</a></li>
        <li onClick={()=> window.location.href = '#developers'}>Developers</li>
        <li onClick={()=> window.location.href = '#feed'}>Feed</li>
        </ul>
        <div style={{display:'flex', gap:'0.5em'}}>
          {theme==='dark' ? <Sun width={22} strokeWidth={1} onClick={()=> LightTheme()} /> :
          <Moon width={22} strokeWidth={1} onClick={()=> DarkTheme()} />}
        </div>
      </section>
   </header>
  )
}
