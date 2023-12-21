import Styles from './Home.module.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import axios from 'axios'
import loader from '../../assets/loaders/loader.gif'
import { useState, useEffect } from 'react'
const Home = () => {
  const [articles, setArticles] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect(()=>{
    const fetchArticles = async() =>{
      setisLoading(true)
      try{
     const articles = await axios.get('http://localhost:5000/article/all/articles')
     setArticles(articles.data.data)
     setisLoading(false)
    }
      catch(err){
        console.log(err)
        setisLoading(false)

      }
    }
    fetchArticles();
  }
  ,[])


  return (
    <main className={Styles.homePage}>
      <h1>All Articles</h1>
      <section>
        {!isLoading && articles ? (articles.map((article)=>{
          return <ArticleCard key={article.id} data={article}/>
        })
        ) : <img src={loader} alt="loading" />}



      </section>
    </main>
  )
}

export default Home