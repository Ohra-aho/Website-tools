const sidebar_base = document.createElement("template");
sidebar_base.innerHTML = 
`
<button id="open_side" ></button>
<content>
	
</content>
`

class SideBar extends HTMLElement { 

	constructor() {
		super();
	}

	connectedCallback() {
		let temp = sidebar_base.content.cloneNode(true);
		let button = temp.querySelector("button");
		button.innerHTML = this.MakeButtonName(this.getAttribute("title"));
		button.addEventListener("click", function (e) {
			this.parentElement.classList.toggle("open");
		});
		
		const length = this.children.length;
		for(let i = 0; i < length; i++) {
			temp.querySelector("content").appendChild(this.children[0]);
		}
		this.appendChild(temp);
		this.setAttribute("custom", "Y")
	}

	MakeButtonName(name) {
		let temp = "";
		for(let i = 0; i < name.length; i++) {
			temp += `<p>${name[i]}</p>`;
		}
		return temp;
	}

	ToggleSideBar() {
		this.classList.toggle("open");
	}

	ChangeLanguage(title, content) {
		this.querySelector("button").innerHTML = this.MakeButtonName(title);
	}

	GiveBaseLanguage() {
		return [
			this.getAttribute("title") ?? "",
			""
		]
	}
}

customElements.define("sidebar-fixed", SideBar);


//Interaction functions



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