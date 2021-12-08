import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'




const Home = () => {
   const[name,setName]=useState('');
   const[email,setEmail]=useState('');
   const[image,setImage]=useState(null);
   const handleSubmit=e=>{
       e.preventDefault();
       
     if(!image){
         return ;
     }
     const formData =new FormData();
    
     formData.append('name',name);
     formData.append('email',email);
     formData.append('image',image);
     console.log(formData.email)

     fetch('http://localhost:5000/user',{
         method:'POST',
         body:formData

     })
     .then(res=>res.json())
     .then(data=>{
         console.log('Success',data)
     })
     .catch(
         error=>{console.error('Error',error);
     });
   }
   
    return (
     
      <div>
          <p>From Fill up with image </p>
          <form onSubmit={handleSubmit}>
          

              <TextField
              sx={{width:'20%'}}
              type="text"
              label="Name"
              variant="standard"
              name="name"
              onChange={e=>setName(e.target.value)}
              placeholder='Name'
              required
              
              />
              <br />
              <TextField
              sx={{width:'20%'}}
              type="Email"
              label="Email"
              variant="standard"
              name="Email"
              placeholder="example@gmail.com"
              onChange={e=>setEmail(e.target.value)}
              required
              
              />
              <br />
             <input
             sx={{width:'20%'}}
              type="file" 
              accept='image/*'
              onChange={e=>setImage(e.target.files[0])}
             
              />
              <br />
          <Button variant="contained" type="submit">Submit </Button>

          </form>
      </div>
    
    )
}

export default Home
