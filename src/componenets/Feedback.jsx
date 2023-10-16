import React,{useState} from 'react'
import '../App.css'

const Cards = ({data}) => {
  return (
    <div className='app-feedbacks-card'>
      <h3>{data.name}</h3>
      <span>{data.content}</span>
    </div>
  )
}

export default function Feedback() {
  const feeds = [
    {id:0, name:'Taskmaster', content:'taskmaster offers good and efficient services for free. dont miss out!'},
    {id:1, name:'David', content:'We\'re trying our bests to add more tools to the existing packages, please be patient!'},
    {id:2, name:'Taskmaster', content:'Have you tried our API? its fast, reliable, and totaly free! try it now'},
    {id:3, name:'Taskmaster', content:'Do you know you can toogle between ligth and dark mode on taskmaster?'},
    {id:5, name:'David', content:'if you ever encounter a bug, please contact us, we\'re always available'},
    {id:6, name:'Taskmaster', content:'we\'ve compiled these tools with care to make sure its accurate as possible'},
    {id:7, name:'Taskmaster', content:'taskmaster offers good and efficient services for free! dont miss out!'},
    {id:8, name:'David', content:'We\'re trying our bests to add more tools to the existing packages, please be patient!'},
    {id:9, name:'Taskmaster', content:'Have you tried our API? its totaly free like the rest, fast and reliable, try it now'},
    {id:10, name:'Taskmaster', content:'Do you know you can toogle between ligth and dark mode on taskmaster?'},
    {id:11, name:'David', content:'if you ever encounter a bug, please contact us, we\'re always available'},
    {id:12, name:'Taskmaster', content:'we\'ve compiled the tools with care to make sure its accurate enough'},
  
  ]
  const [data, setdata] = useState(feeds)

  return (
    <section className='app-feedbacks' id='feed'>
      <div className='app-container-fit'><h2>Feed:</h2></div>
        <section style={{width:'100%', overflow:'auto'}} id='app-feedback-s'>
        <section style={{marginTop:'2vh'}} className='app-feedbacks-cardbody'>
        {data.map(current => <Cards key={current.id} data={current} />)}
        </section>
     </section>
    </section>
  )
}
