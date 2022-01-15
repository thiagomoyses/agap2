import { useState } from "react";
import PosterContainer from "./styles";

export const Poster = () => {

    const [ poster, setPoster ] = useState({})

    return (
        <PosterContainer>
            <div>POSTER</div>
        </PosterContainer>
    );

}