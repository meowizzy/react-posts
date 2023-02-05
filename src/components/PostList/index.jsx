import React from 'react'
import Post from '../Post'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function PostList({ posts, title, removePost }) {

  if (!posts.length) {
    return (
      <h1 style={{textAlign: "center", marginTop: '100px'}} className="posts-empty">
          Посты не найдены
      </h1>
    )
  }

  return (
    <div className='post-list'>
        <h1>{title}</h1>
        <TransitionGroup>
          {
              posts.map((post, index) => (
                <CSSTransition key={post.id} timeout={500} classNames="post">
                  <Post index={index+1} post={post} removePost={removePost} />
                </CSSTransition>
              ))
          }
        </TransitionGroup>
    </div>
  )
}


