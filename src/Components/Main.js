// 





import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Container } from 'react-bootstrap'
import './App.css';




export const Main = () => {
  return (
    <div className='Container' style={{background:'pink'}}>
        <h2 style={{color:'White',textAlign:'center',height:'80px',width:'100%',backgroundColor:'DarkBlue',padding:'10px',boxShadow:'3px 5px 10px blue',textShadow:'3px 5px 10px pink',fontSize:'50px'}}>RYPRO</h2>
        <header style={{height:'60px',background:'aqua'}}>
            <div className='menu'>
                <ul>
                    <Link to='/class' style={{ textDecoration: 'none', color: '#333' }}><li>Class</li></Link>
                    <Link to='/guidelines'><li>Career guidelines</li></Link>
                    <Link to='updates'><li>Technology updates</li></Link>
                    <Link to='gk'><li>GK</li></Link>
                    <Link to='/login'><li><button>Login</button></li></Link>
                </ul>
            </div>
        </header>
        <main>
            <>
         <Container fluid>
                     <Carousel>
                         <Carousel.Item interval={1000}>
                              <img src='images/image1.jpeg' alt='' style={{height:'500px', width:'1078px'}}  className='d-block w-100'/>
                              <Carousel.Caption>
                                <h3>DOUBT CLARIFICATION</h3>
                                <p>It is the best platform to communicate through direct<br></br>
                                messaging allowing teachers to address students doubts<br></br>
                                without identifying them.</p>   
                              </Carousel.Caption>
                         </Carousel.Item>

                         <Carousel.Item interval={1500}>
                              <img 
                              src='images/image2.jpeg' alt='' style={{height:'500px', width:'1078px'}} className='d-block w-100'/>
                              <Carousel.Caption>
                                <h3>LEARNING PATH</h3>
                                <p>Providing teaching path to teachers and Learning<br></br>to students</p>
                              </Carousel.Caption>
                         </Carousel.Item>

                         <Carousel.Item interval={1500}>
                              <img src='images/image3.png' alt='' style={{height:'500px', width:'1078px'}} className='d-block w-100'/>
                              <Carousel.Caption>
                                <h3>LIVE VIDEOS</h3>
                                <p>We offer Live videos and also provides a Application<br></br>on each and every topic</p>
                              </Carousel.Caption>
                         </Carousel.Item>

                         <Carousel.Item interval={1500}>
                              <img src='images/image4.jpeg' alt='' style={{height:'500px', width:'1078px'}} className='d-block w-100'/>
                              <Carousel.Caption>
                                <h3>JOB UPDATES</h3>
                                <p>It is one and only platform to access all the latest<br></br>Job and Technology updates</p>
                              </Carousel.Caption>
                         </Carousel.Item>

                         <Carousel.Item interval={1500}>
                              <img src='images/image5.webp' alt='' style={{height:'500px', width:'1078px'}}  className='d-block w-100'/>
                              <Carousel.Caption>
                                <h3>STUDY MATERIAL</h3>
                                <p>We offer a summarized materials and PDF according to<br></br>student knowledge base</p>
                              </Carousel.Caption>
                         </Carousel.Item>

                     </Carousel>

         </Container>
        </>    
        </main>

        <footer style={{height:'300px',background:'aqua'}}>
            <div className='footer'>
                <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
                <li className="bi bi-instagram"> Instagram</li>
                <li className="bi bi-whatsapp"> whatsapp</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}
