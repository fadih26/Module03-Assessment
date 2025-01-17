import { useParams } from "react-router-dom";
import Styles from './Article.module.css'
import loader from '../../assets/loaders/loader.gif'
import axios from "axios";
import { useState, useEffect } from 'react'
const Article = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect(()=>{
    const fetchArticle = async() =>{
      setisLoading(true)
      try{
     const article = await axios.get(`http://localhost:5000/article/${id}`)
     if(article){
     setArticle(article.data.data)
     setisLoading(false)
     }
     else{
     setArticle(null)
     setisLoading(false)
     }
    }
      catch(err){
        setisLoading(false)

      }
    }
    fetchArticle();
  }
  ,[])


  const renderContent = () => {
    if (isLoading) return <div className={Styles.container}><img src={loader} alt="loading" /></div>;
    // if (isError) return <Error />;
    if (article && !isLoading) return ( <article className={Styles.articleContainer}>
    <img 
    alt={article.title}
    src={article.imageURL}/>
    <div className={Styles.articleWrapper}>
      <header>
        <h1>{article.title}</h1>
        <p><span>by </span>{`${article.Author.firstName} ${article.Author.lastName}`}</p>
        <time>{article.createdAt.split("T")[0]}</time>
      </header>
      <section className={Styles.articleDetails}>
      {article.body}
      </section>
    </div>
  </article>);

    // This is the default component if none of the conditions above are met
    return <div className={Styles.container}><h1>No Article found</h1></div>;
  };
  
  return (
    renderContent()
  )
}

export default Article