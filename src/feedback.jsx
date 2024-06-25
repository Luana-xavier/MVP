import { useState } from 'react';

const FeedbackForm = () => {
    const [avaliacao, setAvaliacao] = useState(0);
    const [comentario, setComentario] = useState('');

    const handleStarClick = (avaliacaoSelecionada) => {
        setAvaliacao(avaliacaoSelecionada);
    };

    const handleMouseOver = (avaliacaoHover) => {
        resetEstrelas();
        for (let i = 1; i <= avaliacaoHover; i++) {
            document.getElementById(`star-${i}`).classList.add('filled');
        }
    };

    const resetEstrelas = () => {
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`star-${i}`).classList.remove('filled');
        }
        for (let i = 1; i <= avaliacao; i++) {
            document.getElementById(`star-${i}`).classList.add('filled');
        }
    };

    const enviarFeedback = () => {
        alert(`Avaliação: ${avaliacao}\nComentário: ${comentario}`);
    };

    return (
        <div className="form-container">
            <h2>Feedback</h2> <br/>
            <p id='pFeed'>Por favor, avalie sua experiência:</p>
            <form className='form'>
                <div className="stars-container">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            id={`star-${star}`}
                            className={`star ${avaliacao >= star ? 'filled' : ''}`}
                            onClick={() => handleStarClick(star)}
                            onMouseOver={() => handleMouseOver(star)}
                            onMouseOut={resetEstrelas}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <p>Comentário (opcional):</p>
                <textarea
                    id="comentario"
                    className="form-input"
                    placeholder="Digite seu comentário aqui..."
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                ></textarea>
                <button type="submit" className="botao" onClick={enviarFeedback}> <a href='/inicio'>
                    Enviar Feedback </a>
                </button>
            </form>
        </div>

    );
};

export default FeedbackForm;
