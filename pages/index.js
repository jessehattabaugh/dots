export default HomePage;

function HomePage() {
	const square = 6;

	const rows = Array(square).fill('');
	const cols = Array(square).fill('');

	return (
		<main>
			<h1>dots</h1>
			<article>
				{rows.map(() => cols.map(() => <button></button>))}
			</article>
		</main>
	);
}
