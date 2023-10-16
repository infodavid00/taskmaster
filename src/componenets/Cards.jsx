import React, {useState} from 'react'
import '../App.css'
import functions from '../utils/functions'
import Display from '../pages/Display'

const Card = ({ data, setdisplaytrue}) => {
  return (
    <>
    {/* {display === true ? <Display data={data} click={setdisplayfalse} /> : null} */}
    <div onClick={setdisplaytrue} className='app-card'>
     <h2>{data.name.slice(0,1).toUpperCase()}</h2>
     <p>{data.name}</p>
    </div>
    </>
  )
}


export default function Cards() {
  const [display, setdisplay] = useState(false)
  const [data, setdata] = useState({})
  
  return (
    <>
    {display === true ? <Display data={data} click={()=> setdisplay(false)} /> : null}
    <section className='app-about-body' style={{backgroundColor:'transparent'}} id='tools'>
      {functions.map(current => <Card key={current.id} data={current} setdisplaytrue={()=> (setdisplay(true), setdata(current))} />)}
    </section>
    </>
  )
}
