import { useState, useEffect } from "react";
import axios from "../axios";

const Row = ({ fetchURL, title, isBig }) => {
	const [movies, setMovies] = useState([]);

	const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
	useEffect(() => {
		async function fetchMovies() {
			const request = await axios(fetchURL);
			setMovies(request.data.results);
			return request;
		}

		fetchMovies();
	}, [fetchURL]);
	// console.log(movies);
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row-posters">
				{movies.map(
					(movie) =>
						((isBig && movie.poster_path) ||
							(!isBig && movie.backdrop_path)) && (
							<img
								className={`poster ${isBig && "poster--big"}`}
								key={movie.id}
								src={`${IMAGE_BASE_URL}${
									isBig ? movie.poster_path : movie.backdrop_path
								}`}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default Row;
