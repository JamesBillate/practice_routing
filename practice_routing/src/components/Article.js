import { useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from "../firebase/config"
import {useEffect, useState} from "react"


import "./Article.css"

export default function Article({articles}) {
  const { urlId } = useParams()
  const navigate = useNavigate()

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const ref = doc(db, 'articles', urlId);
    getDoc(ref)
      .then((snapshot) => {
        setArticle(snapshot.data());
      })
  }, [])

  
  // if (!article) {
  //   setTimeout(() => {
  //     // history.goBack()
  //     //history.push('/')
  //     navigate('/');
  //   }, 2000)
  // }

  return (
    <div className="article">

      <Link className="back" to={`/Home.js`}>{"< Back"}</Link>

      {!article && <p>No records found!</p>}
      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p className="author">By {article.author}</p>
          <img src={article.image} alt={article.title} />
          <p className="articleBody">{article.description}</p>
        </div>
      )}
    </div>
  )
}
