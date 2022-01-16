import { MovieInformationsCOntainer } from "./styles";
import MovieTitle from "./MovieTitle";
import MovieEpisodes from "./MovieEpisodeList";
import MovieDescription from "./MovieDescriptions";

export const MovieInformations = () => {

    return (
        <MovieInformationsCOntainer>
            <MovieTitle />
            <MovieDescription />
            <MovieEpisodes />
        </MovieInformationsCOntainer>
    );

}