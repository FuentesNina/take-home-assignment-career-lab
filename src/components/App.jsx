import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { ImageDetailsPage } from './ImageDetailsPage';
import { useState } from 'react';

export function App() {
	const [showDetails, setShowDetails] = useState(false);
	const [results, setResults] = useState([]);
	const [selectedItem, setSelectedItem] = useState();

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			setResults(json.data);
		});
	}

	function displayDetails(result) {
		setSelectedItem(result);
		setShowDetails(true);
	}

	function hideDetails() {
		setSelectedItem();
		setShowDetails(false);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{showDetails ? (
				<ImageDetailsPage
					hideDetails={hideDetails}
					selectedItem={selectedItem}
				/>
			) : (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{results.map((result) => {
							return (
								<li key={result.id} className="listItem">
									<button
										className="listItem"
										onClick={() => displayDetails(result)}
									>
										{result.title}
										{result.artist_title && ` by ${result.artist_title}`}
									</button>
								</li>
							);
						})}
					</ul>
				</>
			)}
			<Footer />
		</div>
	);
}
