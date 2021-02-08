export function getPreviousSum(slicedSums, currentIndex) {
	const previousIndex = currentIndex - 1;
	const slicedSum = slicedSums[previousIndex];
	return slicedSum[slicedSum.length - 1];
}

export function addSlicedSum(slicedSums, { currentIndex, sum }) {
	if (slicedSums.length === currentIndex) {
		slicedSums.push([]);
	}
	slicedSums[currentIndex].push(sum);
}
