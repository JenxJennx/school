import './Homescreen.css';
import { Carousel } from 'react-carousel-minimal';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import React  from 'react';


function Homescreen() {
  const [flip, setFlip] = useState(false);
  const data = [
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/1.-Snake-Plant.jpg",
      caption: "Snake Plant"
    },
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/2-MONSTERA-DELICIOSA.jpg",
      caption: "Monsterra"
    },
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/6-Silver-Dollar-Vine.jpg",
      caption: "Silver Dollar Vine"
    },
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/8-Philodendron-hederaceum.jpg",
      caption: "Heartleaf Philodendron"
    },
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/14-HOYA-CARNOSA-VARIEGATA.jpg",
      caption: "Variegated Wax Plant"
    },
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/18-Clivia.jpg",
      caption: "Clivia"
    },
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/19-Jade-Plant.jpg",
      caption: "Jade Plant"
    },
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/23-Dumb-Cane.jpg",
      caption: "Dumb Cane"
    },
    {
      image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/04/25-WEEPING-FIG.jpg",
      caption: "Weeping Fig"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <header className="App-header">
        <p className='ww'>
          Weeping Willow
        </p>
        <text className="ww2">
        The platform to grow with your plants and plant family.
        </text>
        <button className='explore'>
          explore
        </button>

        <Carousel
          className='carousel'
            data={data}
            time={2000}
            width="650px"
            height="350px"
            

            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="top"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            border='none'
            style={{
              textAlign: "center",
              maxWidth: "650px",
              maxHeight: "350px",
              margin: "50px auto",
              left:'70%',
              top:'20%',
            }} />
       
        <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
           
    <div>           {/* sign up card */}
         <form  style={{
            position: 'absolute',
            width: '308px',
            height: '518px',
            left: '370px',
            top: '-480px',
            background: '#C7E2C2',
            borderColor: '1px solid #32631C',
            boxShadow: '3px 6px 4px 5px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            }} >
        <br />
        <br />
        <p className='sign'>Sign In</p>
        <input className='whtbox' placeholder='Email'></input>
        <input className='whtbox2' placeholder='Password'></input>
        <button className='login'> Log In</button>
        <button className='showpass'>Show Password</button>
        <button className='fp'>Forgot Password</button>
        <text className='na'>Don't have an account?</text>
        </form>
          <button onClick={() => setFlip(!flip)} className='signup'>Sign Up</button>
        
        </div>
       
        <div> {/* sign up card */}
        <form style={{
            position: 'absolute',
            width: '308px',
            height: '518px',
            left: '370px',
            top: '-480px',
            background: '#C7E2C2',
            borderColor: '1px solid #32631C',
            boxShadow: '3px 6px 4px 5px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            }} >
              <br />
                <br />
        
        <p className='signupWord'>Sign Up </p>
        <input className='whtbox' placeholder='Username'></input>
        <input className='whtbox3' placeholder='Email'></input>
        <input className='whtboxEPass' placeholder='Password'></input>
        <button className='newaccount'>Sign Up</button>
        <text className='na'>Have an account?</text>
        </form>
        <button onClick={() => setFlip(!flip)} className='signup1'>Sign In</button>        
        
        </div>
        </ReactCardFlip>
      </header>
    </div>
  );
}

export default Homescreen;