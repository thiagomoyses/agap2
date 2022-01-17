import DetailsDescription from "./DetailsDescription";
import DetailsTitle from "./DetailsTitle"
import { ContainerRighDetailsTItleDescription } from "views/styles/container";

const DetailsInformationPanel = () => {

    return(
        <ContainerRighDetailsTItleDescription>
            <DetailsTitle />
            <DetailsDescription />
        </ContainerRighDetailsTItleDescription>
    );
}

export default DetailsInformationPanel;