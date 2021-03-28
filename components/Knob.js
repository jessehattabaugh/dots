
import { knob } from './Knob.module.css';

export default Knob;

function Knob({onMouseDownHandler}) {

	return (
		<button
			className={knob}
			onMouseDown={onMouseDownHandler}
		></button>
	);
}
