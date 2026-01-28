

class TextColumn extends HTMLElement { 
	splitter
	original_content
	constructor() {
		super();
	}

	connectedCallback() {
		this.original_content = this.innerText;
		this.innerText = "";
		this.splitter = this.getAttribute("splitter") ?? "$";
		const title = this.getAttribute("title") ?? "";
		const split_content = this.original_content.split(this.splitter);

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
		this.setAttribute("custom", "Y");
	}

	ChangeLanguage(title, content) {
		if(title != "") {
			let h1 = this.children[0]
			h1.innerText = title;
		}
	
		//Remove the old
		let prev_content = this.querySelectorAll("p")
		for(let i = prev_content.length-1; i >= 0; i--) {
			prev_content[i].remove()
		}
		//Add the new
		let new_content = content.split(this.splitter)
		for(let i = 0; i < new_content.length; i++) {
			let p = document.createElement("p");
			p.innerText = new_content[i];
			this.appendChild(p);
		}
	}

	GiveBaseLanguage() {
		return [
			this.getAttribute("title") ?? "",
			this.original_content
		]
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