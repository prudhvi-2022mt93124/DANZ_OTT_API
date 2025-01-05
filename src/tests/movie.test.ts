import { Request, Response } from 'express';

import MovieController from "../controllers/movies.controller";
import MovieModel from "../models/movie.model";
import IMovie from "../interfaces/movies";
// Mock the movie model methods
jest.mock('../models/movie.model'); // This will mock the entire movie model

describe('Movie Service - Unit Tests', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let json: jest.Mock;
    let status: jest.Mock;

    beforeEach(() => {
        json = jest.fn();
        status = jest.fn().mockReturnValue({ json }); // Mock status method to return json method
        req = {
            body: {
                "movieTitle": "RRR",
                "movieDescription": "Indian movie",
                "movieGenre": "Action",
                "rating": "9",
                "movieStreamingLink": "http://localhost:5000/api/RRR"
            }
        };
        res = { status: status as jest.Mock };
    });

    it('should create a new Movie', async () => {
        const mockMovieData = {
            "movieTitle": "RRR",
            "movieDescription": "Indian movie",
            "movieGenre": "Action",
            "rating": "9",
            "movieStreamingLink": "http://localhost:5000/api/RRR"
        };
        const mockMovie: IMovie = { _id: '123', ...mockMovieData } as IMovie;

        (MovieModel.prototype.save as jest.Mock).mockResolvedValue(mockMovie); // Mock the save method

        await MovieController.createMovie(req as Request, res as Response);

        expect(status).toHaveBeenCalledWith(201);

        expect(MovieModel.prototype.save).toHaveBeenCalledTimes(1);
    });

    test('should update a Movie', async () => {
        const mockMovieId = '123';
        // const mockUpdatedData = { name: 'John Smith' };
        const mockUpdatedMovie: IMovie = {
            _id: mockMovieId,
            "movieTitle": "RRR",
            "movieDescription": "Indian movie",
            "movieGenre": "Action",
            "rating": "9",
            "movieStreamingLink": "http://localhost:5000/api/RRR"
        } as IMovie;

        (MovieModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(mockUpdatedMovie); // Mock the findByIdAndUpdate method

        await MovieController.updateMovieById(req as Request, res as Response);

    });

    test('should delete a movie', async () => {
        const mockMovieId = '123';
        const mockDeletedMovie: IMovie = {
            _id: mockMovieId,
            "movieTitle": "RRR",
            "movieDescription": "Indian movie",
            "movieGenre": "Action",
            "rating": "9",
            "movieStreamingLink": "http://localhost:5000/api/RRR"
        } as IMovie;

        (MovieModel.findByIdAndDelete as jest.Mock).mockResolvedValue(mockDeletedMovie); // Mock the findByIdAndDelete method

        await MovieController.deleteMovieById(req as Request, res as Response);

    });

    test('should get all movies', async () => {
        const mockMovies: IMovie[] = [
            {
                _id: '123', "movieTitle": "RRR",
                "movieDescription": "Indian movie",
                "movieGenre": "Action",
                "rating": "9",
                "movieStreamingLink": "http://localhost:5000/api/RRR"
            } as IMovie,
            {
                _id: '124', "movieTitle": "RRR",
                "movieDescription": "Indian movie",
                "movieGenre": "Action",
                "rating": "9",
                "movieStreamingLink": "http://localhost:5000/api/RRR"
            } as IMovie,
        ];

        (MovieModel.find as jest.Mock).mockResolvedValue(mockMovies); // Mock the find method

        await MovieController.getMovieList(req as Request, res as Response);

        expect(MovieModel.find).toHaveBeenCalledTimes(1);
    });

});
