import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import {doc, deleteDoc, collection, onSnapshot} from "firebase/firestore"
import {db} from "../firebase/config.js"

// styles
import './Home.css'

export default function Home() {

  const [articles, setArticles] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const ref = collection(db, 'articles');

    onSnapshot(ref, (snapshot) => {
      console.log(snapshot);
      let results = []
      console.log(snapshot)
      snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()});
      });
      console.log(results);
      setArticles(results);
    })
  }, [])

  const handleDelete = async (id) => {
    const ref = doc(db, 'articles', id)
    await deleteDoc(ref);
  }

  const handleEdit = async (id) => {
    navigate(`/edit/${id}`)
  }

  return (
    <div className="home">
      <h2>Articles</h2>      
      <div className="cardsContainer">
        {articles && articles.map(article => (
          <div key={article.id} className="card">
            <img src={article.image} alt={article.title} />
            <div className="cardInfo">  
              <h3>{article.title}</h3>
              <h4>Written by {article.author}</h4>
              <p>{article.description.slice(0, 200)}
                <span> <Link to={`/articles/${article.id}`}>Read More...</Link></span>
              </p>
              <a onClick={() => handleDelete(article.id)}><span className="material-symbols-outlined" style={{cursor: "pointer", marginBottom: "15px", fontSize: "2rem", color: "maroon"}}>delete</span></a>
              <a onClick={() => handleEdit(article.id)}><span className="material-symbols-outlined" style={{cursor: "pointer", marginBottom: "15px", fontSize: "2rem", color: "orange", marginLeft: "5px"}}>edit</span></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
