import { useQuery } from "@tanstack/react-query";
import { getApodDay } from "../api/api";

const Apod = () => {

    const query = useQuery({
        queryKey: ['apod'],
        queryFn: getApodDay
    });

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };

    return (
        <div className="apod">
            <h1>Foto do dia Astronomia</h1>
            {query.isLoading && "Carregando..."}
            {query.data &&
                <div className="picture-day">
                    <h2>{query.data.title}</h2>
                    <p>{formatDate(query.data.date)}</p>
                    <img src={query.data.url} alt={query.data.title} />
                    <p>{query.data.explanation}</p>
                    <p>{query.data.copyright}</p>
                </div>
            }
        </div>
    );
}

export default Apod;