import AnimatedButton from "../utils/animationReload";
import "./styles/StructureQuote.css";


const StructureQuote = ({ dataText, reload}) => {

    

    const {phrase, author} = dataText

    return (
    <>
        <h1 className="title">INFOGALAX</h1>
        <p className="quote">{"\"" + phrase + "\""} <span className="line"></span> <span className="line2"></span> </p>
        <AnimatedButton onClick={reload}/>
        <footer className="author">Autor: {author}</footer>
    </>
    );
};
export default StructureQuote;
