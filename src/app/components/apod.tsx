import { useQuery } from "@tanstack/react-query";
import { getApodDate, getApodDay } from "../api/api";
import { ApodProps } from "../types/Apod";
import { BotaoVoltar } from "./botaoVoltar";

const Apod = ({ optionType, date }: ApodProps) => {

    const query = useQuery({
        queryKey: ['apod'],
        queryFn: () => {
            if (optionType === 'day') {
                return getApodDay();
            } else if (optionType === 'date') {
                const splitDate = date.split('/');
                const formatDate = splitDate[2] + '-' + splitDate[1] + '-' + splitDate[0];
                return getApodDate(formatDate);
            } else {
                throw new Error('Invalid query type');
            }
        }
    });

    return (
        <div className="apod">
            {query.isFetching && "Carregando..."}
            {query.data &&
                <>
                    <BotaoVoltar/>
                    <div className="picture-day">
                        <h1>Foto do dia Astronomia</h1>
                        <div className="titles">
                            <h2>{query.data.title}</h2>
                            <i>{date}</i>
                        </div>
                        <div className="flex">
                            <div className="image">
                                <img src={query.data.url} alt={query.data.title} />
                            </div>
                            <div className="text">
                                <p className="desc">{query.data.explanation}</p>
                                <p className="author">{query.data.copyright}</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Apod;