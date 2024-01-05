import React from 'react';
import "./Body.css"


const Body = () => {
  return (
    < >
        <div className="col-2">
            <div className="descriptiuon">
                <p className='para'>UX/UI DESIGNER</p>
                <h1 className="heading">Hello My Name <br /> Is Madelyn Torff</h1>
                <p className='para2'>Short text with details about you, what you do or your professional career. You can add more information on the about page.
                </p>
                <div className="buttons">
                   <button className='button1'>Project</button>
                   <button className='button2'>Linkdin</button>
                </div>
             </div>
            <div className="imagePara">
                <img src="https://images.pexels.com/photos/14723477/pexels-photo-14723477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/" alt="image" className='image' />
                
              </div>
        </div>
        <h1 className='head'>Add Project</h1>
        <div className="form">
          <img src="https://media-content.ccbp.in/ccbp_prod/media/profile_pic/9e688f38-9d68-41d8-9022-75fdbbbb803d.jpeg" alt="" className='minilogo' />
              <p className='p1'>Project name</p>
              <input type="text" />
              <p className='p1'>Project Link</p>
              <input type="text" />
              <div>
                <p className="p2">Description</p>
                  <input type="text" className='textatea' />
              </div>
              <button className='textButton'>Add</button>
        </div>
        <div className="shadow">
        
        </div>
        <h1 className='head'>Add Project</h1>


        <div className="col-2">
            <div className="descriptiuon">
                <h1 className="heading">Hello My Name <br /> Is Madelyn Torff</h1>
                <p className='para2'>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
                </p>
                <div className="buttons">
                   <button className='button3'>View Project</button>
                </div>
             </div>
            <div className="imagePara">
                <img src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className='image' />
                
              </div>
        </div>

<br className='br' />
<br />
<br />

        <div className="col-2">
            <div className="imagePara">
                <img src="https://images.pexels.com/photos/14723477/pexels-photo-14723477.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" className='image' />
                
              </div>
            <div className="descriptiuon">
                <h1 className="heading">Hello My Name <br /> Is Madelyn Torff</h1>
                <p className='para2'>What was your role, your deliverables, if the project was personal, freelancing.</p>
                <div className="buttons">
                   <button className='button3'>View Project</button>
                </div>
             </div>
        </div>
<br />
<br />
<br />
        <div className="col-2">
            <div className="descriptiuon">
                <h1 className="heading">Hello My Name <br /> Is Madelyn Torff</h1>
                <p className='para2'>You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
                <div className="buttons">
                   <button className='button3'>View Project</button>
                </div>
             </div>
            <div className="imagePara">
                <img src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" className='image' />
                
              </div>
        </div>
               

               <div className="icon">
                 <img src="https://cdn-icons-png.freepik.com/128/1077/1077042.png?ga=GA1.1.974199942.1703678799" alt=""  className='img1' />
                 <img src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png?ga=GA1.1.974199942.1703678799&semt=ais" alt="" className='img1' />
                 <img src="https://cdn-icons-png.flaticon.com/128/134/134723.png?ga=GA1.1.974199942.1703678799&semt=ais" alt="" className='img1' />
               </div>
                 <p className='copy'>Copyright © 2024.  All rights reserved</p>

    </>
  );
}

export default Body;
