import Styles from './ArticleCard.module.css'
import { Link } from 'react-router-dom'
const Article = ({data}) => {
    return (
  <Link to={`/article/${data.id}`}>
        <article className={Styles.articleCard}>
            <img src={data.imageURL} alt={data.title} />
            <div className={Styles.cardWrapper}>
                <div className={Styles.cardDetails}>
                    <p>{`${data.Author.firstName} ${data.Author.lastName}`}</p>
                    <span>{data.createdAt.split("T")[0]}</span>
                </div>
                <p>{data.body}</p>
            </div>

        </article>
        </Link>
    )
}

export default Article