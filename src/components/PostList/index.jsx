import React from 'react'
import Post from '../Post'

export default function PostList({ posts, title }) {
  return (
    <div className='post-list'>
        <h1>{title}</h1>
        {
            posts.map(post => (
                <Post post={post} key={post.id}/>
            ))
        }
    </div>
  )
}


