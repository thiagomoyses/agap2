import { useSelector } from "react-redux";
import { AppState } from "redux/store";

const DetailsTitle = () => {

    const title = useSelector((state: AppState) => state.episodeDetails.request.name);

    const doneTitle = title ? <h1>{ title }</h1> : false;

    return (
        <div>
            <h1>{ doneTitle }</h1>
        </div>
    );
}

export default DetailsTitle;