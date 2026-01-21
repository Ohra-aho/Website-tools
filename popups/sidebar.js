const sidebar_base = document.createElement("template");
sidebar_base.innerHTML = 
`
<sidebar>
	<button id="open_side" onclick="ToggleSideBar(this)"></button>
	<content>
		
	</content>
</sidebar>
`

class SideBar extends HTMLElement { 

	constructor() {
		super();
		let temp = sidebar_base.content.cloneNode(true)
		temp.querySelector("button").innerHTML = this.MakeButtonName(this.getAttribute("main_title"));
		const length = this.children.length;
		for(let i = 0; i < length; i++) {
			temp.querySelector("content").appendChild(this.children[0]);
		}
		this.appendChild(temp);
	}

	MakeButtonName(name) {
		let temp = "";
		for(let i = 0; i < name.length; i++) {
			temp += `<p>${name[i]}</p>`;
		}
		return temp;
	}

	/*ReadjustOnResize() {
		console.log(this.offsetWidth);
		if(Array.from(this.classList).includes("right")) {
			this.style.right = `-${this.offsetWidth}px`;
		}
		else if(Array.from(this.classList).includes("left")) {
			this.style.left = `-${this.offsetWidth}px`;
		}
	}*/
}

customElements.define("sidebar-fixed", SideBar);


//Interaction functions

function ToggleSideBar(btn) {
	let sidebar = btn.parentElement;
	sidebar.parentElement.classList.toggle("open");
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