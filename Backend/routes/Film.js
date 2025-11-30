import express from 'express';
import { Controllerfilm, getAllFilms, getFilmById } from '../Controller/controllerManager.js';

const Favfilm = express.Router()


Favfilm.post('/movies', Controllerfilm)
Favfilm.get("/film", getAllFilms);
Favfilm.get("/film/:id", getFilmById);


  // http://localhost:3000/api/auth/movies

export default Favfilm