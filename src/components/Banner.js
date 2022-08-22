import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

const Banner = () => {
	const [movie, setMovie] = useState([]);
	const [load, setLoad] = useState(false);

	function truncate(str, n) {
		return str.length > n ? str.substring(0, n - 1) + "  ..." : str;
	}

	useEffect(() => {
		async function fetchData() {
			setLoad(true);
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			setLoad(false);
			return requests;
		}

		fetchData();
	}, []);

	// console.log(movie);

	return (
		<div
			className="banner"
			style={{
				backgroundImage: `url(${
					movie.backdrop_path && `${IMAGE_BASE_URL}${movie.backdrop_path}`
				}
						)`,
			}}
		>
			{load === false && (
				<div className="banner-content">
					<h1>{movie?.name || movie?.original_name || movie?.title}</h1>
					<div className="buttons">
						<div className="banner-btn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
									clipRule="evenodd"
								/>
							</svg>
							PLay
						</div>
						<div className="banner-btn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clipRule="evenodd"
								/>
							</svg>
							My List
						</div>
					</div>
					<p className="banner-description">
						{truncate(`${movie.overview}`, 150)}
					</p>
				</div>
			)}
			<div className="banner-fade"></div>
		</div>
	);
};

export default Banner;
