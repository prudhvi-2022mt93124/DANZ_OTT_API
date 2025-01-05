import mongoose from "mongoose";
import IMovie from "../interfaces/movies"

const MovieModel = mongoose.model<IMovie>('Movies', new mongoose.Schema<IMovie>({
    movieTitle: { type: String, required: true },
    movieDescription: { type: String, required: false },
    movieGenre: { type: String, required: true },
    rating: { type: String, required: false },
    movieStreamingLink: { type: String, required: true },

}));

export default MovieModel;