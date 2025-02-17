import { useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


import "./Article.css"

export default function Article({articles}) {
  const { urlId } = useParams()
  //const history = useHistory()

  const navigate = useNavigate()

  const article = articles.find( ({ id }) => id === urlId);

  console.log("id: " + urlId)
  console.log(articles)

  if (!article) {
    setTimeout(() => {
      // history.goBack()
      //history.push('/')
      navigate('/');
    }, 2000)
  }

  return (
    <div className="article">

      <Link className="back" to={`/Home.js`}>{"< Back"}</Link>

      {!article && <p>No records found!</p>}
      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p className="author">By {article.author}</p>
          <img src={article.image} alt={article.title} />
          <p className="articleBody">{article.body}</p>
        </div>
      )}
    </div>
  )
}
