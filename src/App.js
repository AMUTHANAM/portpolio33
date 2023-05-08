import {Routes,Route,Link,useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import profile from './profile.jpg'
import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Skills } from './Skills';
import { About } from './About';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const PERSON = [{
   name : " Amuthan",
age : 26,
 img : " https://i.pinimg.com/564x/b7/06/e9/b706e9a5e66eccc80836c50267d67192.jpg "},
 {
  name : " Ram",
  age : 26,
   img : " https://i.pinimg.com/564x/b7/06/e9/b706e9a5e66eccc80836c50267d67192.jpg "
 },
 {
  name : " Raj",
  age : 26,
   img : " https://i.pinimg.com/564x/b7/06/e9/b706e9a5e66eccc80836c50267d67192.jpg "

 },{
  name : " Jai",
  age : 26,
   img : " https://i.pinimg.com/564x/b7/06/e9/b706e9a5e66eccc80836c50267d67192.jpg "

 },{
  name : " Mani",
  age : 26,
   img : " https://i.pinimg.com/564x/b7/06/e9/b706e9a5e66eccc80836c50267d67192.jpg "
 }]

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">

      <div className='mainapp'>

      <AppBar position='static'>
<Toolbar>

<div>
<h1> S.AMUTHAN</h1>
</div>


<div class="mainbut">

<Button color="inherit" onClick={()=>navigate("/profile")}>
 <HomeIcon/> Home</Button>

  <Button color="inherit" onClick={()=>navigate("/about")} >
  <AccountCircleIcon/> About</Button>

  <Button color="inherit" onClick={()=>navigate("/skills")} >
  <EventNoteIcon/>  Skills</Button>

  <Button color="inherit" onClick={()=>navigate("/project")} >
  <QrCodeIcon/>  project</Button>

  <Button color="inherit"  onClick={()=> navigate("/contact")}  >
  <PlayArrowIcon/> contact</Button>
</div>
</Toolbar>
</AppBar>   


        
      </div>

   
{/* <nav>
<ul>
  <li>
    <Link to="/profile">Home</Link>

  </li>
</ul>

</nav> */}



  <Routes>
<Route path="/profile"  element={<Profile/>}/>
<Route path="/about"  element={<About/>} />
<Route path ="/skills" element={<Skills/>}/>
<Route path="/project"  element={<Project/>}/>
<Route path="/contact"  element={ <Contact/> }/>
</Routes> 
 



    </div>
  );
}

export default App;



// create the component



function Profile(){
 
  return(
<>
 <div class="home" >
  <div class="content">
  <h1>Hi I am AMUTHAN </h1>
<p>Full Stack Developer</p>
<p> I like to make digital experience easier and simple for people</p>
  </div>

  <div class="img">
  <img class="imgtag"  src={profile} />
  </div>

</div>

</> 

  )
}

function Project(){
 const navigate = useNavigate()
return(
<>
<AppBar>
<Toolbar>

<img  className='pimg'  src=" https://thumbs.dreamstime.com/b/property-construction-logo-design-business-corporate-si-real-estate-property-construction-logo-design-business-102538781.jpg"/>
   <h1>AAA <sub>construction </sub></h1>

   <div className='but'>

   <Button color="inherit"  onClick={()=>navigate("/ourpackage")} >
      Our packages  </Button>

      <Button color="inherit" >
      Our Homes  </Button>

      <Button color="inherit" >
    Custer stories  </Button>

   </div>

</Toolbar>
</AppBar>

<div>
<img  className='mimg' src=" https://www.photoshopvideotutorial.com/freepsdmock/wp-content/uploads/2022/02/Free-Wood-Reception-Logo-Mockup.jpg"/>
</div>


<Routes>
<Route path="ourpackage"  element={ <Ourpackages/> }/>

</Routes>
</>
)

}

function Ourpackages(){

  return(
    <>
    <div>
         <h1> hi our packages</h1>

         <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


      
    </div>
    
    </>
  )
}


function Contact(){

  return(

    <>
    <div className='contact'>
    
<h4>CONTACT ME</h4>
    <div className='conbut'>
   <Button>
   <EmailIcon/>  Email
   </Button>
    
   <Button>
   < PhoneIphoneIcon/>  phone
   </Button>
    
   <Button>
   <GitHubIcon/>  gitup
   </Button>
    
   <Button>
   <LinkedInIcon/>  linkdin
   </Button>
    




    </div>
     </div>
    </>
  )
}

