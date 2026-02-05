class LimitedText extends HTMLElement { 
	content
	char_limit
	constructor() {
		super();
	}

	connectedCallback() {
		this.content = this.innerText;
		this.char_limit = 0;
		this.CalculateCharLimit();
		if(this.char_limit < this.content.length) {
			this.innerText = this.content.substring(0, this.char_limit) + "...";
		}

		window.addEventListener("resize", () => {
			this.CalculateCharLimit();
			if(this.char_limit < this.content.length) {
				this.innerText = this.content.substring(0, this.char_limit) + "...";
			} else {
				this.innerText = this.content;
			}
		});
	}

	CalculateCharLimit() {
		const char_size = this.offsetHeight * this.offsetWidth / (this.content.replaceAll(" ", "").length)
		this.char_limit = (this.parentElement.offsetHeight * this.parentElement.offsetWidth / char_size);
	}
}

customElements.define("limited-text", LimitedText);