import { html, css, LitElement } from 'https://cdn.skypack.dev/lit';
export { DotDot };

class DotDot extends LitElement {
	static get styles() {
		return css`
			:host {
				background: blue;
				border-radius: 50%;
				height: calc(60vw / var(--size));
				/*outline: 1px dashed green;*/
				width: calc(60vw / var(--size));
			}
		`;
	}

	render() {
		return html`<div></div>`;
	}
}
