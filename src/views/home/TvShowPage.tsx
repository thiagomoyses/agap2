import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getTvShowPage } from "redux/effects/home/TvShowPAgeEffect";

import Container from 'views/home/styles'
import { MovieInformations } from 'components';
import PosterImage from 'components/home/poster/Poster'

export  const TvShowPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTvShowPage());
    }, [dispatch]);

    return(
        <div>
            <Container>
                <PosterImage />
                <MovieInformations />
            </Container>
        </div>
    );

}