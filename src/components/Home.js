import React from "react";

import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";

import requests from "../request";

function Home() {
	return (
		<div>
			<Nav />
			<Banner />
			<Row
				fetchURL={requests.fetchNetflixOriginals}
				title="NETFLIX  ORIGINALS"
				isBig
			/>
			<Row fetchURL={requests.fetchTrending} title="Trending" />
			<Row fetchURL={requests.fetchTopRated} title="Top Rated" />
			<Row fetchURL={requests.fetchActionMovies} title="Action Movies" />
			<Row fetchURL={requests.fetchComedyMovies} title="Comedy Movies" />
			<Row fetchURL={requests.fetchHorrorMovies} title="Horror Movies" />
			<Row fetchURL={requests.fetchRomanceMovies} title="Romance Movies" />
			<Row fetchURL={requests.fetchDocumentaries} title="Documentaries" />
		</div>
	);
}

export default Home;
