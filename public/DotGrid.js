import { html, css, LitElement } from 'https://cdn.skypack.dev/lit';
export { DotGrid };

class DotGrid extends LitElement {
	static get styles() {
		return css`
			:host {
				display: grid;
				grid-column-gap: calc(30vw / 6);
				grid-row-gap: calc(30vw / 6);
				margin: calc(30vw / 6);
				grid-template-columns: repeat(6, 1fr);
				/*outline: 1px dashed red;*/
			}
		`;
	}

	render() {
		this.rows = Array(6).fill('');
		this.cols = Array(6).fill('');
		return html`${this.rows.map(() =>
			this.cols.map(() => html`<dot-dot />`),
		)}`;
	}
}
