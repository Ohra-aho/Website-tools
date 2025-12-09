
function GetArrayAttribute(name, target) {
	const temp = target.getAttribute(name);
	if(temp != null) {
		return temp.split(", ");
	} else {
		return null;
	}
}


