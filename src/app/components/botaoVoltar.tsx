import { useContext } from "react";
import { OptionContext } from "../contexts/OptionContext";

export const BotaoVoltar = () => {

    const optionCtx = useContext(OptionContext);

    const handleVoltar = () => {
        optionCtx?.setOption('');
    }

    return (
        <span onClick={handleVoltar}>Voltar</span>
    );
}
