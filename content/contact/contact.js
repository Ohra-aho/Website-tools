const contact_form_template = document.createElement("template");
contact_form_template.innerHTML = 
`
<h2>Contact</h2>
<form action="">
	<part>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" placeholder="Joe Shmo">
	</part>
	<part>
		<label for="subject">Subject</label>
		<input type="text" id="subject" name="subject" placeholder="Offer">
	</part>
	<textarea name="message" id="message" placeholder="Message"></textarea>
	<input type="submit" value="Send" id="submit">
</form>
`

class ContactForm extends HTMLElement { 
	links = [];
	constructor() {
		super();
	}

	connectedCallback() { 
		const template = contact_form_template.content.cloneNode(true);
		this.appendChild(template.cloneNode(true));

		const title = this.getAttribute("title");
		const action = this.getAttribute("action");
		const name_label = this.getAttribute("name_label");
		const subject_label = this.getAttribute("subject_label");
		const message_label = this.getAttribute("message_label");
		const submit_label = this.getAttribute("submit_label");
		const parts = this.querySelectorAll("part");

		if(title != null) {
			this.children[0].innerHTML = title;
		}
		if(action != null) {
			this.querySelector("form").setAttribute("action", action);
		}
		if(name_label != null) {
			parts[0].children[0].innerHTML = name_label;
			parts[0].children[1].setAttribute("placeholder", name_label);
		}
		if(subject_label != null) {
			parts[1].children[0].innerHTML = subject_label;
			parts[1].children[1].setAttribute("placeholder", subject_label);
		}
		if(message_label != null) {
			this.querySelector("textarea").setAttribute("placeholder", message_label);
		}
		if(submit_label != null) {
			this.querySelectorAll("input")[2].setAttribute("value", submit_label);
		}

	}
}

customElements.define("contact-form", ContactForm);