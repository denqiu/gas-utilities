/**
 * @typedef {Object} Header
 * @property {GoogleAppsScript.Document.ParagraphHeading} type
 * @property {string} name
 * 
 * List of headers from the document's outline view.
 * @param {GoogleAppsScript.Document.Document} doc A document.
 * @returns {Header[]} List of headers from Document.
 */
function listHeaders(doc) {
    let headers = [];
    doc.getBody().getParagraphs().forEach(paragraph => {
		const headerType = paragraph.getHeading();
		if (headerType.toString().startsWith("HEADING") && paragraph.getText().trim().length !== 0) {
			headers.push({
				type: headerType,
				name: paragraph.getText()
			})
		}
	});
    return headers;
}