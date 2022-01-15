import Container from 'views/home/styles'
import { Poster, MovieInformations } from 'components';

export  const TvShowPage = () => {
    

    return(
        <div>
            <Container>
                <Poster />
                <MovieInformations />
            </Container>
        </div>
    );

}