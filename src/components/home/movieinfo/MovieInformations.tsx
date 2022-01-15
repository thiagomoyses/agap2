import { MovieInformationsCOntainer } from "./styles";
import MovieTitle from "./MovieTitle";
import MovieEpisodes from "./MovieEpisodes";

export const MovieInformations = () => {

    return (
        <MovieInformationsCOntainer>
            <MovieTitle />
            <MovieEpisodes />
        </MovieInformationsCOntainer>
    );

}