const simple_contact_template = document.createElement("template");
simple_contact_template.innerHTML = 
`
<a href="mailto:">Contact</a>
`

class SimpleContact extends HTMLElement { 
	links = [];
	constructor() {
		super();
	}

	connectedCallback() { 
		const name = this.innerHTML;
		this.innerHTML = "";
		const subject = this.getAttribute("subject");
		const email = this.getAttribute("email");

		const template = simple_contact_template.content.cloneNode(true);
		this.appendChild(template.cloneNode(true));
		
		if(name != null) {
			this.children[0].innerHTML = name;
		}
		if(email != null) {
			let original_href = this.children[0].getAttribute("href");
			this.children[0].setAttribute("href", `${original_href}${email}`);
		}
		if(subject != null) {
			let original_href = this.children[0].getAttribute("href");
			const split_subject = subject.split(" ");
			let complete_subject = "";
			for(let i = 0; i < split_subject.length; i++) {
				if(i == split_subject.length-1) {
					complete_subject += split_subject[i];
				} else {
					complete_subject += split_subject[i]+"%20";
				}
			}

			this.children[0].setAttribute("href", `${original_href}?subject=${complete_subject}`)
		}
	}
}

customElements.define("simple-contact", SimpleContact);