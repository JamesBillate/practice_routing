import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import {getDocs, collection} from "firebase/firestore"
import {db} from "../firebase/config.js"

// styles
import './Home.css'

export default function Home() {

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const ref = collection(db, 'articles');
    getDocs(ref)
      .then((snapshot)=> {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()});
        });
        setArticles(results);
      })
  }, [])

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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
