import { useQuery } from "@tanstack/react-query";
import { getApodDate, getApodDay } from "../api/api";
import { ApodProps } from "../types/Apod";

const Apod = ({ queryType, date }: ApodProps) => {

    const query = useQuery({
        queryKey: ['apod'],
        queryFn: () => {
            if (queryType === 'day') {
                return getApodDay();
            } else if (queryType === 'date') {
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
                <div className="picture-day">
                    <h1>Foto do dia Astronomia</h1><span><i>{date}</i></span>
                    <h2>{query.data.title}</h2>
                    <img src={query.data.url} alt={query.data.title} />
                    <p>{query.data.explanation}</p>
                    <p>{query.data.copyright}</p>
                </div>
            }
        </div>
    );
}

export default Apod;