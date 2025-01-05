import express from "express";
const movieRouter = express.Router();
import MovieController from "../controllers/movies.controller";

// Create a new movie
movieRouter.post('/', MovieController.createMovie);

// Get all movies
movieRouter.get('/', MovieController.getMovieList);

// Search Movie by title & genre
movieRouter.get('/search', MovieController.searchMovie);

export default movieRouter;