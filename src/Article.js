import './Article.css';
import Card from './Card.js';

function Article(props) {
    // Проверка наличия данных
    if (!props.db || Object.keys(props.db).length === 0) {
        return <div className="no-data">Нет данных для отображения</div>;
    }

    return (
        <div className="articles-grid">
            {Object.keys(props.db).map(elem => (
                <Card key={elem} persone={props.db[elem]} />
            ))}
        </div>
    );
}

export default Article;