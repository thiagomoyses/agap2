import { useSelector } from "react-redux";
import { AppState } from "redux/store";
import { SummaryEpisodeDescription } from "views/styles/container";

const DetailsDescription = () => {

    const description = useSelector((state: AppState) => state.episodeDetails.request.summary);

    var cleanDescription = '';

    if (description){
        cleanDescription = description.replace(/(<([^>]+)>)/ig,"")
    }

    return (
        <SummaryEpisodeDescription>
            <h2>{ cleanDescription }</h2>
        </SummaryEpisodeDescription>
    );


}

export default DetailsDescription