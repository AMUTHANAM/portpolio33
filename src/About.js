import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Button from '@mui/material/Button';
export function About() {
  const navigate = useNavigate();
  return (
    <>



      <div className='detail'>
        <p><b>Name</b>: Amuthan.s</p>
        <p><b>profile</b>:full stack developer</p>
        <p><b>Education</b>:B.E(civil)</p>
        <p><b>D.O.B</b>:03-10-1996</p>
        <p><b>Fathername</b>:Soundra pandian</p>
        <p><b>Email</b>: amuthanamthan@gmail.com</p>
        <p><b>phone no</b>:9150259073</p>
        <div className='facebook'>
          <LinkedInIcon />
          
          <GitHubIcon   />

         
        </div>
      </div>

    
    </>

  );

}

