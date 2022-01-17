import { DetailsInformationPanelContainer } from "./styles";
import DetailsDescription from "./DetailsDescription";
import DetailsTitle from "./DetailsTitle"

const DetailsInformationPanel = () => {

    return(
        <DetailsInformationPanelContainer>
            <DetailsTitle />
            <DetailsDescription />
        </DetailsInformationPanelContainer>
    );
}

export default DetailsInformationPanel;