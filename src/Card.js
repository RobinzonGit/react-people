import './Card.css';

function Card({ persone }) {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={persone.photo} alt={persone.name} />
            </div>
            <div className="name">{persone.name}</div>
            <div className="age">{persone.age} лет</div>   
        </div>
    );
}

export default Card;