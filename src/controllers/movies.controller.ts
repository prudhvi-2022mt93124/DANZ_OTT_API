import { Request, Response } from "express";
import MovieModel from "../models/movie.model";

class MovieController {

    static async createMovie(req: any, res: any) {
        try {
            const movie = new MovieModel(req.body);
            await movie.save();
            return res.status(201).json(movie);
        } catch (error) {
            res.status(400).json({ message: 'Error creating movie', error });
        }
    }
    static async getMovieList(req: any, res: any) {
        try {
            const movie = await MovieModel.find();
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching movies', error });
        }
    }
    static async searchMovie(req: any, res: any) {
        try {
            const { movieTitle, movieGenre } = req.query;
            const movie = await MovieModel.aggregate([
                {
                    $match: {
                        ...(movieTitle && { movieTitle: { $regex: movieTitle, $options: 'i' } }),
                        ...(movieGenre && { movieGenre: { $regex: movieGenre, $options: 'i' } }),
                    },
                }
            ]);
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching movies', error });
        }
    }
    static async updateMovieById(req: any, res: any) {
        try {
            const movie = await MovieModel.findByIdAndUpdate({ _id: req.params._id }, req.body);
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ message: 'Error Updating movies', error });
        }
    }
    static async deleteMovieById(req: any, res: any) {
        try {
            const movie = await MovieModel.findByIdAndDelete({ _id: req.params._id });
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ message: 'Error Updating movies', error });
        }
    }
}

export default MovieController;