import { html, css, LitElement } from 'https://cdn.skypack.dev/lit';
export { DotGrid };

class DotGrid extends LitElement {
	static get styles() {
		return css`
			:host {
				display: grid;
				grid-column-gap: calc(30vw / var(--size));
				grid-row-gap: calc(30vw / var(--size));
				margin: calc(30vw / var(--size));
				grid-template-columns: repeat(var(--size), 1fr);
				/*outline: 1px dashed red;*/
			}
		`;
	}
	static get properties() {
		return {
			size: { type: Number },
		};
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('size')) {
			this.rows = Array(this.size).fill('');
			this.cols = Array(this.size).fill('');
			this.style.setProperty('--size', this.size);
		}
	}

	render() {
		return html`${this.rows.map(() =>
			this.cols.map(() => html`<dot-dot />`),
		)}`;
	}
}
