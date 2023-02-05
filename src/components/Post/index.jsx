import React from 'react'
import Button from '../UI/button/Button';

import './Post.scss';

export default function Post({ post, removePost, index }) {

  return (
    <div className="post">
        <div className="post__content">
            <strong><strong>{index}.&nbsp;</strong>{post.title}</strong>
            <div>
                {post.body}
            </div>
        </div>
        <div className="post_btns">
            <Button onClick={() => removePost(post.id)}>Удалить</Button>
        </div>
    </div>
  )
}
