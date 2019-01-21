/**
 * NodeScreenCapturer is responsible for downloading PNG image of inspected element.
 *
 * @param HTMLElement root Root node for the subtree that will be processed
 */
function NodeScreenCapturer(node, prefix) {
	"use strict";

	html2canvas(node).then(function (canvas) {
		canvas.toBlob(function (blob) {
			saveAs(blob, `${prefix}.png`);
		});
	});	
}
