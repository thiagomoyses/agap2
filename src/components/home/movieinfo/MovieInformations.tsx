
import MovieTitle from "./MovieTitle";
import MovieEpisodes from "./MovieEpisodeList";
import MovieDescription from "./MovieDescriptions";

import { ContainerRightTitleDescription, ContainerRightEpisodeList} from "views/styles/container";

export const MovieInformations = () => {

    return (
        <>  
            <ContainerRightTitleDescription>
                <MovieTitle />
                <br/>
                <MovieDescription />
            </ContainerRightTitleDescription>
            <ContainerRightEpisodeList>
                <MovieEpisodes />
            </ContainerRightEpisodeList>
        </>
    );

}