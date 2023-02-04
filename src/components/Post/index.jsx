import React from 'react'

import './Post.scss';

export default function Post({ post }) {
  return (
    <div className="post">
        <div className="post__content">
            <strong>{post.title}</strong>
            <div>
                {post.body}
            </div>
        </div>
        <div className="post_btns">
            <button>Удалить</button>
        </div>
    </div>
  )
}