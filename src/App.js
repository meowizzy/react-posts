import axios from "axios";
import { useEffect, useState, useRef } from "react";
import PostList from './components/PostList';
import Button from './components/UI/button/Button';
import Input from './components/UI/input/Input';

import './styles/App.scss';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "JavaScript", body: "Description"},
    {id: 3, title: "JavaScript", body: "Description"},
    {id: 4, title: "JavaScript", body: "Description"},
    {id: 5, title: "JavaScript", body: "Description"}
  ]);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addNewPost = event => {
    event.preventDefault();
    
    const newPost = {
      id: Date.now(),
      title: title,
      body: desc
    };

    if (title && desc) {
      setPosts([...posts, newPost]);
    }

    setTitle('');
    setDesc('');
  };

  return (
    <div className="App">
      <form>
        <Input type="text" placeholder="Название поста" value={title} onChange={e => setTitle(e.target.value)}/>
        <Input type="text" placeholder="Описание поста" value={desc} onChange={e => setDesc(e.target.value)}/>
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;
