class Helpers {	static isRequired(req, value) {

	const errors = { notAString: false, emptyString: false };
	const required = [];

	value.map((value) => {
		if (!Object.keys(req).includes(value)) {
			required.push({ [value]: `${value} field is required` });
		}
	});

	return required;
}

}

export default Helpers;
