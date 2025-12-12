

class TextColumn extends HTMLElement { 

	constructor() {
		super();
		const content = this.innerText;
		this.innerText = "";
		const splitter = this.getAttribute("splitter") ?? "$";
		const title = this.getAttribute("title") ?? "";
		const split_content = content.split(splitter);
		if(title != "") {
			let h1 = document.createElement("h1");
			h1.innerText = title;
			this.appendChild(h1);
		}
		for(let i = 0; i < split_content.length; i++) {
			let p = document.createElement("p");
			p.innerText = split_content[i];
			this.appendChild(p);
		}
	}

}

customElements.define("text-column", TextColumn);


//Untility functions

//target: class to be worked with
//name: tag in which true content needs to be pasted
//template: template to be pasted into the class
function PlaceTrueContent(target, template, name) {
	const content = target.innerHTML;
	target.innerHTML = "";
	let temp = template.content.cloneNode(true)
	temp.querySelector(name).innerHTML = content;
	target.appendChild(temp);
}