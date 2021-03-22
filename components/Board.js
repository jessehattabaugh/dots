import Knob from './Knob.js';

export default Board;

function range(size) {
	return Array(size).fill(0);
}

function Board() {
	const size = 6;
	const rows = range(size);
	const cols = range(size);
	return (
		<main>
			{rows.map(() => cols.map(() => <Knob />))}
		</main>
	);
}
