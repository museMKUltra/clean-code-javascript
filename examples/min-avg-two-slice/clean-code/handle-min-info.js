function isNull(value) {
	return value === null;
}

function isSmaller(num1, num2) {
	return num1 < num2;
}

function sliceLengthIsValid(sliceLength) {
	return sliceLength > 1;
}

export function updateMinInfo(accumulator, { avg, position, sliceLength }) {
	if (!sliceLengthIsValid(sliceLength)) return;

	const { minAvg } = accumulator;
	if (isNull(minAvg) || isSmaller(avg, minAvg)) {
		accumulator.minAvg = avg;
		accumulator.startPosition = position;
	}
}
