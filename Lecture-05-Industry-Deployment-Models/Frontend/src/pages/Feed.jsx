import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setposts] = useState([
       {
         _id:"1",
        image:"https://images.unsplash.com/photo-1770566258012-7d809f99c574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
        caption:"beautiful nature",
       }
       
      
    ])

useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        setposts(res.data.posts)
    })

    
},[])

  
  return (
    <section className='feed-section' >
        <h1>Feed</h1>
        {
            posts.length>0?(
                posts.map((post)=>(
                    <div key={post._id}>
                        <img src={post.image} alt="" />
                        <p>{post.caption}</p>
                    </div>
                ))
            ):(
                <p>No posts yet</p>
            )
        }

    </section>
  )
}

export default Feed