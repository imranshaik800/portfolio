import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import {useTypewriter,Cursor} from "react-simple-typewriter"
import Contact from "../Contact"
import "./index.css"

const Index = () => {
  const [text] = useTypewriter({
    words : ["Frontend Developer" , "Backend Developer", "Web Designer","Full Stack Developer"],
    loop:{},
  })
  return (
    <div>
      <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className='checkbtn'>
      <HiBars3/>
      </label>
        <label className='logo'>Imran Shaik</label>
        <ul>
            <li> <a href='About'>About</a></li>
            <li><a href='Education'>Education</a></li>
            <li><a href="Projects">Projects</a></li>
            <li><a href="Contact">Contact</a></li>
        </ul> 
      </nav>
      <div>
        <div className='main-bgcontainer'>
        <div className='home-textcontainer'>
        <h1 className='home-role-section'>Iam <span style={{color:"yellow"}}>{text}</span><Cursor/></h1>
        <p className='home-para-section'>"Hard work beats talent when talent doesn't work hard."</p>
        </div>
        </div>
      </div>
      <div >
        <div className='about-section'>
          <img alt="coding" style={{width:"400px"}}src="https://img.freepik.com/premium-vector/programmer-semi-flat-color-vector-character-student-figure-sitting-person-white-man-computer-desk-coding-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5964.jpg"/>
          <div className='about-section-items'>
          <h1 className='about-section-heading'>About Me </h1>
          <p className='about-section-para'>Junior software developer with experience in HTML, CSS, JavaScript, and ReactJS, seeking to expand skills in back-end technologies. Proficient in building dynamic and responsive web applications. Eager to leverage both front-end and back-end development knowledge to create full-stack solutions. Quick learner with a passion for problem-solving and continuous improvement in web technologies.</p>
          </div>
        </div>
      </div>
      <div style={{margin:"60px"}}>
        <h1 style={{marginLeft:"40px"}}>My Educational Section</h1>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
      <div className='card-container'>
        <img alt="college-logo" style={{width:"250px"}}src="https://cdn3d.iconscout.com/3d/premium/thumb/university-building-3d-icon-download-in-png-blend-fbx-gltf-file-formats--school-college-institute-graduation-back-to-pack-education-icons-9123677.png?f=webp"/>
        <h1 className="college">Chalapathi Institute of Technology</h1>
        <p className='branch'>BTech in Mechanical Engineering</p>
        <p className='percentage'>7.2 CGPA</p>
        <p className='year-of-graduation'>2021-2024</p>
      </div>
      <div className='card-container'>
        <img alt="college-logo" style={{width:"290px",height:"200px"}}src="https://png.pngtree.com/png-vector/20240129/ourlarge/pngtree-online-education-university-building-3d-illustration-kit-png-image_11513617.png"/>
        <h1 className='college'>Universal college of Engineering and Technology</h1>
        <p className='branch'>Diploma In Mechanical Engineering</p>
        <p>8.1 CGPA</p>
        <p>2018-2021</p>
      </div>
      <div className='card-container'>
        <img alt="college-logo" style={{width:"300px"}}src="https://p.turbosquid.com/ts-thumb/Uc/VAmHt9/W7/cartoonschool022/jpg/1663686261/600x600/fit_q87/bafc68e571e6d56d19178f0c1f2460e02a29c627/cartoonschool022.jpg"/>
        <h1 className='college'>G.R.C.R.K Sri chaitantya High School</h1>
        <p className='branch'>SSC</p>
        <p>7.8 CGPA</p>
        <p>2021-2024</p>
      </div>  
      </div>
      <div id="projects">
        <div style={{margin:"50px"}}> 
          <h1 style={{marginLeft:"40px"}}>My Projects</h1>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            <div className='project-container'>
              <img alt="i" style={{width:"400px"}}src="https://cdn3d.iconscout.com/3d/premium/thumb/screen-recorder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--record-application-user-interface-video-camera-general-ui-pack-icons-8111517.png?f=webp"/>
              <h1 className='project-title'>Screen Recorder</h1>
              <p className='project-description'>Developed a fully functional screen recording application that captures user activity with high-qualityvideo output. The application allows users to record their entire screen or specific sections, withoptions to start, pause, and stop recordings. Integrated audio capture from both system andmicrophone. Implemented file-saving functionality in various formats (e.g, MP4) and provided a userfriendly interface with real-time recording preview. Built using HTML5, CSS, JavaScript. Focused on performance optimization to ensure smooth recording with minimal resource usage.</p>
              <a className="project-link" href="https://secreen-recorder.onrender.com/">View Project</a>
            </div>
            <div className='project-container'>
              <img alt="i" style={{width:"400px"}} src="https://www.ignek.com/wp-content/uploads/2024/02/Blogging-Applications.webp"/>
              <h1 className='project-title'>Blogs Application</h1>
              <p className='project-description'>Developed a full-featured blogs application that allows users to create, read, update, and delete(CRUD) blog posts. The Integrated user authentication and authorization to manage access control forposts. Implemented responsive design for optimal viewing on both mobile and desktop devices. Builtusing ReactJS for the front end, Node.js and Express for the back end, and MongoDB for data storage.</p>
              <a className="project-link" href="https://blogs-frontend-nco9.onrender.com/">View Project</a>
            </div>
            <div className='project-container'>
              <img alt="i" style={{width:"400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRyKsya7csX0zL0GrWBEW9Yo0oO1iGRaDtw&s"/>
              <h1 className='project-title'>Cars 24</h1>
              <p className='project-description'>The project is a web-based platform that allows users to buy and sell cars. It provides a seamless interface for users to list their cars for sale, search for available cars to purchase, and manage transactions. The platform offers features like user authentication, car listing management, advanced filtering options.Sellers can create listings by uploading car details (make, model, year, price, photos, etc.).Search functionality based on criteria such as car make, model, price range, mileage, and location.</p>
              <a className='project-link'href="cars12">Coming Soon</a>
            </div>
            <div className='project-container'>
              <img alt="i" style={{width:"400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvYKAAzNn5gX1ZWz_4z7G89HvY0s4KefTQg&s"/>
              <h1 className='project-title'>Todo Application</h1>
              <p className='project-description'>The To-Do List Application is a simple, user-friendly tool that allows users to manage their daily tasks. Users can create, update, and delete tasks, organize them by categories or due dates, and mark them as complete. The application will have a minimalistic interface for an optimal user experience, while also offering functionality like task prioritization, reminders, and task categorization</p>
              <a className='project-link'href="https://imranshaik800.github.io/To-Do-Application/">View Project</a>
            </div>
            <div className='project-container'>
              <img alt="i" style={{width:"400px",height:"200px"}} src="https://img.freepik.com/premium-photo/flat-design-illustration-calculator-with-coins-pencil-notebook_1025753-178766.jpg"/>
              <h1 className='project-title'>Calculator Project</h1>
              <p className='project-description'>The Calculator Application is a basic tool for performing arithmetic calculations such as addition, subtraction, multiplication, and division. This project will be built using React to showcase the power of component-based development and state management. The calculator will offer a user-friendly interface with a responsive design, allowing users to perform basic mathematical operations easily.</p>
              <a className='project-link'href="https://calculator-orzf.onrender.com">View Project</a>
            </div>
          </div>
        </div>
        <div style={{marginLeft:"20px"}}>
          <Contact/>
        </div>
      </div>
      <footer style={{backgroundColor:"gray"}}>
        <h1 style={{color:"white",padding:"20px"}}>Gmail:<span style={{color:"red",fontSize:"25px"}}>imranshaik222333@gmail.com</span></h1>
        <h1 style={{color:"white",padding:"20px"}}>Mobile:<span style={{color:"red"}}>8008397613</span></h1>
      </footer>
     
      </div>
  )
}

export default Index
