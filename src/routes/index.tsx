import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TvShowPage, EpisodeDetails } from 'views';

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TvShowPage />} />
                <Route path="/details" element={<EpisodeDetails />} />
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    );

}