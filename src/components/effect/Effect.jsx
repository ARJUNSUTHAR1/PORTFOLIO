import "./effect.css";
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
const Effect = () => {
  const lenis = new Lenis()
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  useGSAP(()=>{
    let tl = gsap.timeline({
      scrollTrigger :{
        trigger:'.effect',
        start:'top bottom',
        end:'100% 80%',
        scrub:true,
       
        // markers:true,
        
      },
    })
    tl.to(".rotate-div",{
     transform : "rotate(-10deg)",
     scale : 0.8,
    },"height")
    tl.to("#column-1",{
      marginTop : "-10%",
     },'height')
     tl.to("#column-2",{
      marginTop : "-20%",
     },'height')
     tl.to("#column-3",{
      marginTop : "-30%",
     },'height')
     tl.to("#column-4",{
      marginTop : "-40%",
     },'height')
     tl.to("#column-5",{
      marginTop : "-50%",
     },'height')
    
 
     let tl2 = gsap.timeline({
      scrollTrigger :{
        trigger:'.effect',
        start:'100% 120%',
        end:'120% 100%',
        scrub:true,
       
        markers:true,
        
      },
    })

    tl2.to(".rotate-div",{
      transform : "rotate(0deg)",
      scale : 0.9,
     })
   })
  return (
    <div className="effect">
      <div className="content-part">
        <div className="rotate-div">
          <div id="column-1" className="column">
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
          </div>
          <div id="column-2" className="column">
          <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
          </div>
          <div id="column-3" className="column">
          <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
          </div>
          <div id="column-4" className="column">
          <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div><div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            
          </div>
          <div id="column-5" className="column">
          <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
            <div className="img-div">
              <img src="https://imgs.search.brave.com/3GwsfQLSn4O9eg_-L60ggp5hpwym4p76RcsZJPZxZSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAw/MDY3MjcwMi9waG90/by9oYXBweS1zbWls/aW5nLW1hdHVyZS1p/bmRpYW4tb3ItbGF0/aW4tYnVzaW5lc3Mt/bWFuLWNlby10cmFk/ZXItdXNpbmctY29t/cHV0ZXItdHlwaW5n/LXdvcmtpbmctaW4u/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9UEV4U2Iw/R0lFQWxiQm04d0R0/TnVjS0pyVlZKT1Rx/bjlrSEVadlFCaHpq/VT0" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effect;
