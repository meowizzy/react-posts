import React, { useState } from 'react'
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

export default function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: ''});

    const addNewPost = event => {
        event.preventDefault();

        if (!post.title || !post.body) {
            alert('Поля для создания поста не должны быть пустыми');
            return;
        }
        
        const newPost = {
            ...post,
            id: Date.now()
        };
        
        create(newPost);
        setPost({title: '', body: ''});
    };

    return (
        <form>
            <Input type="text" placeholder="Название поста" value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <Input type="text" placeholder="Описание поста" value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
            <Button onClick={addNewPost}>Создать пост</Button>
        </form>
    )
}
