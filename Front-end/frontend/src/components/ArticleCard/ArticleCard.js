import Styles from './ArticleCard.module.css'
import { Link } from 'react-router-dom'
const Article = ({cardID}) => {
    return (
  <Link to={`/dashboard/${cardID}`}>
        <article className={Styles.articleCard}>
            <img src='https://t4.ftcdn.net/jpg/02/99/62/11/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E.jpg' alt="whatever" />
            <div className={Styles.cardWrapper}>
                <div className={Styles.cardDetails}>
                    <p>James Arthur</p>
                    <span>10/12/2023</span>
                </div>
                <p>How To Setup Backend</p>
            </div>

        </article>
        </Link>
    )
}

export default Article