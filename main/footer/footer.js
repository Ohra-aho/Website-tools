
const footer_list_base = document.createElement("template");
footer_list_base.innerHTML = 
`
	<div>
		<h3></h3>
	</div>
`


class FooterList extends HTMLElement { 

	constructor() {
		super();
		const links = GetArrayAttribute("links", this);
		console.log(links);
	}

}

customElements.define("footer-list", FooterList);


//Untility functions

//target: class to be worked with
//name: tag in which true content needs to be pasted
//template: template to be pasted into the class
export function PlaceTrueContent(target, template, name) {
	const content = target.innerHTML;
	target.innerHTML = "";
	let temp = template.content.cloneNode(true)
	temp.querySelector(name).innerHTML = content;
	target.appendChild(temp);
}