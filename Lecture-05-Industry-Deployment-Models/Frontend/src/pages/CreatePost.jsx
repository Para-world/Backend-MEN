import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    axios.post("http://localhost:3000/create-post",formdata)
    .then((res) => {
      navigate("/feed")
    })
    .catch((err) => {
      console.log(err);
      alert("Error creating post")
    })
   
  }
  return (
    <section className='create-post-section' >
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit} >
            <input type="file" name = "image" accept="image/*" /> 
            <input type="text" name='caption' required  placeholder='enter caption' />
            <button type='submit'>Create Post</button>
        </form>

    </section>
  )
}

export default CreatePost