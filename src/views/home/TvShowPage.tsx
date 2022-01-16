import Container from 'views/home/styles'
import { MovieInformations } from 'components';
import PosterImage from 'components/home/poster/Poster'

export  const TvShowPage = () => {

    return(
        <div>
            <Container>
                <PosterImage />
                <MovieInformations />
            </Container>
        </div>
    );

}