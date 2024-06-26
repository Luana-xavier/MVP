import Card from "./assets/img/Card.jpg";

function Conheca() {
    return (

        <div className="Conheca">
            <h2>Conheça o Unifeso</h2> <br/><br/>

            <img id="imgUni"src={Card} alt="Card"/><br/><br/>

            <p>O Centro Universitário Serra dos Órgãos (UNIFESO) é uma instituição de ensino superior privada sediada no bairro do Alto em Teresópolis, no estado do Rio de Janeiro, Brasil. Foi fundada em 1 de março de 1970 por iniciativa da Fundação Educacional Serra dos Órgãos (FESO), tendo início suas atividades por meio da criação da Faculdade de Medicina de Teresópolis</p><br />
            <label className="form">
            <button className="botao"><a href="https://www.unifeso.edu.br/"><p id="fontBot">Venha fazer parte da nossa história</p></a></button><br />
            </label>
        </div>)
}

export default Conheca;