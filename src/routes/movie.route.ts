import express from "express";
const movieRouter = express.Router();
import MovieController from "../controllers/movies.controller";
import Admin from "../middlewares/admin";

// Create a new movie
movieRouter.post('/', MovieController.createMovie);

// Get all movies
movieRouter.get('/', MovieController.getMovieList);

// Search Movie by title & genre
movieRouter.get('/search', Admin.validateAdminUser, MovieController.searchMovie);

// Update Movie by Id
movieRouter.put('/:_id', Admin.validateAdminUser, MovieController.updateMovieById);

// Delete Movie by Id
movieRouter.delete('/:_id', Admin.validateAdminUser, MovieController.deleteMovieById);

export default movieRouter;