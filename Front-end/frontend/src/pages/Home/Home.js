import Styles from './Home.module.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
const Home =() =>{
  return (
    <main className={Styles.homePage}>
        <h1>All articles</h1>
        <section>
 <ArticleCard cardID="1"/>
 <ArticleCard cardID="2"/>
 <ArticleCard cardID="3"/>
 <ArticleCard cardID="4"/>
 <ArticleCard cardID="5"/>

        </section>
    </main>
  )
}

export default Home