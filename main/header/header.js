const template = document.createElement("template");
template.innerHTML = 
`
`
function GetArrayAttribute(name, target) {
	const temp = target.getAttribute(name);
	if(temp != null) {
		return temp.split(", ");
	} else {
		return null;
	}
}


class Header extends HTMLElement {

	constructor() {
		super();
		const logo_link = this.getAttribute("logo");
		const links = GetArrayAttribute("links", this);
		const link_names = this.getAttribute("link_names").split(", ");
		this.innerHTML = 
		`<header>
			<link rel='stylesheet' href='./main/header/header.css' type='text/css'>
			<title_holder>
				<img src='${logo_link}' alt='logo' class='logo'>
				<h1>${this.innerText}</h1>
			</title_holder>
			${this.GiveLinks(links, link_names)}
		</header>`;
	}

	
	GiveLinks(links, link_names) {
		if(links != null && link_names != null) {
			let true_links = "<header_links>";
			for(let i = 0; i < links.length; i++) {
				true_links += `<a href='${links[i]}'>${link_names[i]}</a>`;
			}
			return true_links+"</header_links>";
		} else {
			return "";
		}
		
	}
}

customElements.define("header-fixed", Header);