import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/store";

import { getMovieEpisodes } from "redux/effects/home/movieepisodelist/MovieEpisodeListEffect";
import { IMovieEpisodeList } from "redux/interfaces/home/movieepisodelist/MovieEpisodeList";

import { MovieEpisodesContainer } from "./styles";

const MovieEpisodes = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieEpisodes());
    }, [dispatch]);

    const movieEpisodes = useSelector((state: AppState) => state.episodeList);

    const movieEpisodesItem = movieEpisodes.episodes.map((episode: IMovieEpisodeList) => (
        <div key={ episode.id }>
            <h1>{ episode.name }</h1>
            <br/>
        </div>
    ))

    return (
        <MovieEpisodesContainer>
            { movieEpisodesItem }
        </MovieEpisodesContainer>
    );

}

export default MovieEpisodes;