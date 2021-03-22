import Knob from './Knob.js';
import { board } from './Board.module.css';

export default Board;

function range(size) {
	return Array(size).fill(0);
}

function Board() {
	const size = 6;
	const rows = range(size);
	const cols = range(size);
	return <main className={board}>{rows.map(() => cols.map(() => <Knob />))}</main>;
}
