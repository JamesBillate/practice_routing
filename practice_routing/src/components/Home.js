import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

// styles
import './Home.css'

export default function Home({articles}) {

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
              <p>{article.body.slice(0, 200)}
                <span> <Link to={`/articles/${article.id}`}>Read More...</Link></span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
