import React,{useState} from 'react'
import '../App.css'
import { X } from 'react-feather'
import handlefunctions from '../utils/handlefunctions'

function handlefunction(i, val) {
  return handlefunctions(val)[i]
}

export default function Display({data, click}) {
  const [inputvalue, setinputvalue] = useState('')
  const handleinpchange = (e) => setinputvalue(e.target.value)
  const [resvisibility, setresvisibility] = useState(false)
  const [res, setres] = useState("")

  const arrayHero = res.split('')
  const [count, setcount] = useState('')
  const [index, setindex] = useState(0)
  const int = setTimeout(()=> {
  setindex(index+1)
  setcount(count + '' + arrayHero[index])
  }, 34)
  if (index === arrayHero.length) clearInterval(int)
  int;
  const endpoint = 'https://taskmasterio.onrender.com/'

  return (
    <section className='display-body'>
      <div className='display-container'>
        <section style={{marginTop:'3vh', width:'88%'}}>
        <X onClick={click} width={22} strokeWidth={1} style={{alignSelf:'flex-end',marginTop:'2vh',cursor:'pointer'}} id='display-cancelbtn' />
        </section>

        <h2>{data.path === '/api' ? 'Our Api' : data.name}</h2>
        <section style={{marginTop:'5vh', width:'88%'}}>
          
           {resvisibility === true ?  <div className='display-resboard'><span id='display-rtn'>return: </span><span style={{overflow: 'auto',whiteSpace: 'wrap'}}>{count}</span><button id='display-resarr'></button></div> : null}

           {data.path === '/api' ? (
            <div style={{marginBottom: '2vh'}}>
              <p style={{fontFamily:'nunito, sans-serif', color:'var(--app-clA)', padding:'10px 0px', lineHeight:1.7}}>You can access TaskMaster's features using our free API through the default '/' endpoint. It contains all the necessary information to make requests and utilize TaskMaster's capabilities.</p>
              <a id='api' href={endpoint} target='_blank' style={{overflow:'auto', whiteSpace:'wrap',fontFamily:'nunito, sans-serif', color:'var(--app-bgB)', padding:'10px 0px', lineHeight:1.7}}>{endpoint}</a>  
            </div>
           ) :  
           <textarea onClick={()=>(setinputvalue(''),setresvisibility(false),setres(''),setcount(''),setindex(0))} value={inputvalue} onChange={handleinpchange} className='display-textarea' placeholder={data.placeholder} rows={'6'}></textarea>
         }

           {data.path !== '/api' ? <input type='submit' value='send' className='display-cta' onClick={()=> setres((handlefunction(data.name, inputvalue)),setresvisibility(true))}/>
           :   <input type='submit' onClick={()=> window.location.href = endpoint} className='display-cta' value={'See api endpoint'} />
           }
         </section>
      </div>
    </section>
  )
}

