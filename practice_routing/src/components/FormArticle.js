import { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {collection, addDoc, doc, getDoc, updateDoc} from 'firebase/firestore';
import {db} from '../firebase/config'
// styles
import './create.css'

export default function Create() {  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [button, setButton] = useState('Submit')


  const navigate = useNavigate()

  const { urlId } = useParams();
  
  useEffect(() => {
    if(urlId) {
      const ref = doc(db, 'articles', urlId);

      getDoc(ref).then((snapshot) => {
        const article = snapshot.data();
        if(article){
          setTitle(article.title);
          setDescription(article.description);
          setAuthor(article.author);
          setImage(article.image);
          setButton("Update");
        } else {
          navigate('/')
        }
      })
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()   
    const article = {title,author,description,image};

    if(urlId) {
      const ref = doc(db, 'articles', urlId);
      await updateDoc(ref, article)  
    } else {
      const ref = collection(db, 'articles')
      await addDoc(ref,article)
    }

    // setTitle("");
    // setAuthor("");
    // setDescription("");

    navigate('/')
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Article</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span className="titles">Title:</span>
          <input 
            className="inputfield"
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        
        <label>
          <span className="titles">Author:</span>
          <input 
            className="inputfield"
            type="text" 
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </label>

        <label>
          <span className="titles">Description:</span>
          <textarea 
            className="inputfield"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>

        <label>
          <span className="titles">Image URL:</span>
          <input 
            className="inputfield"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
          />
        </label>

        <button className="btn">{button}</button>
      </form>
    </div>
  )
}