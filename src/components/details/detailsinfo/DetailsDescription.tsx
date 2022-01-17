import { useSelector } from "react-redux";
import { AppState } from "redux/store";

const DetailsDescription = () => {

    const description = useSelector((state: AppState) => state.episodeDetails.request.summary);

    var cleanDescription = '';

    if (description){
        cleanDescription = description.replace(/(<([^>]+)>)/ig,"")
    } else{
        cleanDescription = '';
    }

    return (
        <div>
            <h2>{ cleanDescription }</h2>
        </div>
    );


}

export default DetailsDescription