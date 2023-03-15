export function ImageDetailsPage({ hideDetails, selectedItem }) {
	return (
		<>
			<button onClick={() => hideDetails(false)}>Back</button>
			<p>
				{selectedItem.title}
				{selectedItem.artist_title && ` by ${selectedItem.artist_title}`}
			</p>
			<img
				alt={selectedItem.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${selectedItem.image_id}/full/843,/0/default.jpg`}
			/>
		</>
	);
}
