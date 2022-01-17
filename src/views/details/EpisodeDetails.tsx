import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch} from "react-redux";

import DetailsImage from 'components/details/detailsimage/DetailsImage';
import DetailsInformationPanel from 'components/details/detailsinfo/DetailsInformationsPanel';
import { getEpisodeDetails } from "redux/effects/detalis/EpisodeDetailsEffect";

import { Container, ContainerLeft, ContainerRight } from "views/styles/container";

export const EpisodeDetails = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEpisodeDetails(id))
    });

    return(
        <Container>
            <ContainerLeft>
                <DetailsImage />
            </ContainerLeft>

            <ContainerRight>
                <DetailsInformationPanel />
            </ContainerRight>
        </Container>
    );

}