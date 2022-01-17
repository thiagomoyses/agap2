import ContainerEpiDetails from './styles'
import DetailsImage from 'components/details/detailsimage/DetailsImage';
import DetailsInformationPanel from 'components/details/detailsinfo/DetailsInformationsPanel';

export const EpisodeDetails = () => {

    return(
        <ContainerEpiDetails>
            <DetailsImage />
            <DetailsInformationPanel />
        </ContainerEpiDetails>
    );

}