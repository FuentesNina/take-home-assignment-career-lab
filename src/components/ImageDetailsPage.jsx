export function ImageDetailsPage({ setShowDetails }) {
	return (
		<>
			<button onClick={() => setShowDetails(false)}>Back</button>
			<p>This is the Image Details Page</p>
		</>
	);
}
