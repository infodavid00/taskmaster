import React, {useState} from 'react'
import '../App.css'
import functions from '../utils/functions'
import Display from '../pages/Display'

const Lists = ({data, setdisplaytrue}) =>  <li><a onClick={setdisplaytrue}>{data.name.toLowerCase()}</a></li>

export default function Footer() {
  const [display, setdisplay] = useState(false)
  const [data, setdata] = useState({})

  return (
    <>
    {display === true ? <Display data={data} click={()=> setdisplay(false)} /> : null}
    <section className="app-afterHeader app-footer-container app-footer-b-container">
    {functions.map(current => <Lists key={current.id} data={current} setdisplaytrue={()=> (setdisplay(true), setdata(current))} />)}
    </section>
   </>
  )
}

