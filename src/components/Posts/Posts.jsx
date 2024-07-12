import React, { useState } from 'react';
import HomePage from 'components/HomePage/HomePage';
import PostItem from './PostItem';
import { nanoid } from 'nanoid';

import styles from './posts.module.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);  //если мы хотим чтобы изначально наш список был пуст, передаем начальное состояние как пустою масив 
    // {
    //   id: nanoid(),
    //   name: 'dsfafsdfdsaf',
    //   description: 'dsfdsfffffffc dwaasdadsaa afd fddf afdfdf fdef',
    // },
    // {
    //   id: 2,
    //   name: 'Name 2',
    //   description: 'hto svjazana s podtom, to est kratkoe soderzhanie',
    // },
    // { id: 3, name: 'Name 3', description: 'A zdes budet vsjakaj vsjachena ch' },
  //]);

//   const [name, setName] = useState(''); //для каждого поля ввода создаем состояние, по умолчанию будет пустая строка
//   const [description, setDescription] = useState('');

const [post, setPost] = useState({name: '', description: ''})// когда у нас используется много полей input, нам лучше создать одно состояние для всех полей
  
const addNewPost = e => {
    e.preventDefault();
    //console.log(name, body);
    // const newPost = {  // создаем новый объект для записи добавления поста
    //   id: nanoid(), 
    //   name,
    //   description,
    // };
    // console.log(newPost);
    // setPosts([...posts, newPost]);    // созданый объект мы добавляем в массив постов
    //                                   // передаем новый массив, куда разворачиваем старый массив  (...posts) уже с сочествующими постами и в конец добавляем новый пост (setPost)
    // setName(''); //после отправки формы очищаем input
    // setDescription('');
    setPosts([...posts, {...post, id:nanoid()}]);
    setPost({name:'', description:''});
    };

  const removePost = (id) => {                // принимает id поста, который нужно удалить, и обновляет состояние posts новым массивом, исключающим этот пост. Если id текущего поста p не равно id, переданному в removePost, то этот пост включается в новый массив.
                                              // Если id текущего поста p равно id, переданному в removePost, то этот пост не включается в новый массив.
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div>
      <HomePage />
      <form className={styles.form} action="">
        <h1 className={styles.title}>Posts List</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Post's name"
          //value={name} //связываем значение value,  inputa с первичным сосотоянием name
          value={post.name}
          //onChange={e => setName(e.target.value)} //реализуем функцию onChange, для того чтобы мы видели что пользователь вводит
          onChange={e => setPost({...post, name: e.target.value})} //если у нас одно состоянии для всех полей тогда перезаписываем onChange, то есть все поля мы оставляем как есть (...post), только перезаписываем тот который нам нужен (name) 
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Description"
          //value={description}
          value={post.description}
          //onChange={e => setDescription(e.target.value)}
          onChange={e => setPost({...post, description: e.target.value})}
        />
        <button className={styles.btn} type="submit" onClick={addNewPost}>
          Create new post
        </button>
      </form>
      {posts.length > 0 ? (
        posts.map((post, index) => <PostItem post={post} number={index+1} key={post.id} remove={removePost}/>)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Posts;
