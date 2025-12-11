const sidebar_base = document.createElement("template");
sidebar_base.innerHTML = 
`
<sidebar>
	<link rel="stylesheet" href="./popups/popups.css"></link>
	<button id="open_side" onclick="ToggleSideBar()"></button>
	<content>
		
	</content>
</sidebar>
`


class SideBar extends HTMLElement { 

	constructor() {
		super();
		const content = this.innerHTML;
		this.innerHTML = "";
		let temp = sidebar_base.content.cloneNode(true)
		temp.querySelector("button").innerHTML = this.MakeButtonName(this.getAttribute("main_title"));
		temp.querySelector("content").innerHTML = content;
		this.appendChild(temp);
	}

	MakeButtonName(name) {
		let temp = "";
		for(let i = 0; i < name.length; i++) {
			temp += `<p>${name[i]}</p>`;
		}
		return temp;
	}
}

customElements.define("sidebar-fixed", SideBar);


//Interaction functions

function ToggleSideBar() {
	console.log("Que");
	let sidebar = document.getElementById("temp");
	sidebar.classList.toggle("open");
}

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