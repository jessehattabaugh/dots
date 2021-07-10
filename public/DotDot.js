import { html, css, LitElement } from 'https://cdn.skypack.dev/lit';
export { DotDot };

class DotDot extends LitElement {
	static get styles() {
		return css`
			:host {
				background: blue;
				border-radius: 50%;
				height: calc(60vw / 6);
				/*outline: 1px dashed green;*/
				width: calc(60vw / 6);
			}
		`;
	}

	render() {
		return html`<div></div>`;
	}
}
