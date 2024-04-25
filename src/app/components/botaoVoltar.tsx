import { useContext } from "react";
import { OptionContext } from "../contexts/OptionContext";
import iconVoltar  from '../assets/arrow.png';

export const BotaoVoltar = () => {

    const optionCtx = useContext(OptionContext);

    const handleVoltar = () => {
        optionCtx?.setOption('');
    }

    return (
        <div className="btn-voltar">
            <img src={iconVoltar.src}/>
            <span onClick={handleVoltar}>Voltar</span>
        </div>
    );
}
