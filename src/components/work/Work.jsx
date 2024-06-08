
import { useGSAP } from "@gsap/react"
import "./work.css"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Work = () => {
  useGSAP(()=>{
   let tl = gsap.timeline({
     scrollTrigger :{
       trigger:'.main-container',
       start:'50% 50%',
       end:'400% 100%',
       scrub:true,
       pin:true,
      //  markers:true,
       
     }
   })
   tl.to(".myworktext",{
    height : "75vh"
   },"height")
   tl.to(".scroll-work",{
    height : "75vh"
   },"height")
   tl.to("#my",{
    left : 0,
   },"height")
   tl.to("#work",{
    right : 0,
   },"height")
   tl.to(".scroll-img",{
    marginTop : "-500%",
   })

  })
  return (
    <div className='main-container'>
      <div className="myworktext">
        <h1 id='my'>My</h1>
        <h1 id='work'>Work</h1>
      </div>

      <div className="scroll-wrapper">
      <div className="scroll-work">
      <div className="scroll-img">
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
        <img src="https://imgs.search.brave.com/qSMU8n771WmUTRphz9rQzrIcz9JpltvoeM3tKiSHALk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qaW1k/b2Jsb2cud3Blbmdp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL29w/dGltaXppbmctd2Vi/LWltYWdlcy1mb3It/YmV0dGVyLXNlby03/MTR4MzU3LmpwZw" alt="" />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Work
