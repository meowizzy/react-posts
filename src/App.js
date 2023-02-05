import { useEffect, useState } from "react";
import { usePosts } from "./hooks/useHooks";
import { PostService } from "./API/PostService";
import PostList from './components/PostList';
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import Modal from "./components/Modal";
import Button from './components/UI/button/Button';

import './styles/App.scss';

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const posts = await PostService.getAllPosts();
    setPosts(posts);
  }

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const removePost = id => {
    const newPosts = posts.filter(post => post.id !== id);

    setPosts(newPosts);
  };


  return (
    <div className="App">
      <Button onClick={() => setModalVisible(true)}>
        Добавить пост
      </Button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {
        posts.length 
        ? <PostList posts={sortedAndSearchedPosts} removePost={removePost} title="Список постов"/> 
        : <h1 style={{textAlign: 'center'}}>Загрузка...</h1>
      }
      
    </div>
  )
}

export default App;
