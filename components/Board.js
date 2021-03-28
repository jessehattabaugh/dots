import Knob from './Knob.js';
import { board } from './Board.module.css';
import { useState } from 'react';

export default Board;

function range(size) {
	return Array(size).fill(0);
}

function Board() {
	const [drawingFrom, setDrawingFrom] = useState(null);

	function onMouseDownHandler(event) {
		console.log(`🖱️click`, event);
		setDrawingFrom(event.target);
		return;
	}

	const size = 6;
	const rows = range(size);
	const cols = range(size);
	return (
		<main
			className={board}
			onMouseMove={(event) => {
				if (drawingFrom) {
					console.log('✍️ moved', event.target);
				}
			}}
		>
			{rows.map((x, row) =>
				cols.map((y, col) => (
					<Knob
						key={row + col}
						onMouseDownHandler={onMouseDownHandler}
					/>
				)),
			)}
		</main>
	);
}
