import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getTvShowPage } from "redux/effects/home/TvShowPAgeEffect";
import { MovieInformations } from 'components';
import PosterImage from 'components/home/poster/Poster'

import { Container, ContainerLeft, ContainerRight } from "views/styles/container";

export  const TvShowPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTvShowPage());
    }, [dispatch]);

    return(
            <Container>
                <ContainerLeft>
                    <PosterImage />
                </ContainerLeft>
                
                <ContainerRight>
                    <MovieInformations />
                </ContainerRight>
            </Container>
    );

}