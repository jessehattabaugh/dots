console.log('👋🌎');

import { html } from 'https://cdn.skypack.dev/lit-html';
import { component, useState } from 'https://cdn.skypack.dev/haunted';

function DotGrid() {
	const rows = Array(6).fill('');
	const cols = Array(6).fill('');

	console.log('DotGrid rendering', rows, cols);

	const [drawStart, setDrawStart] = useState();

	return html`<main>
			${rows.map(() => cols.map(() => html`<div class="dot"></div>`))}
		</main>
		<style>
			main {
				display: grid;
				grid-column-gap: 1fr;
				grid-row-gap: 1fr;
				grid-template-columns: repeat(6, 1fr);
			}
			main .dot {
				border-radius: 50%;
				border: none; /* don't look like a button */
				font-size: 4em;
				justify-self: center;
				padding: 5%;
			}
		</style>`;
}

customElements.define('dot-grid', component(DotGrid));
