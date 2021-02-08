import { addSlicedSum, getPreviousSum } from "./handle-sliced-sums.js";
import { updateMinInfo } from "./handle-min-info.js";

function hasPreviousElement(currentIndex) {
	return currentIndex > 0;
}

export function processAverageOfSlices() {
	return (accumulator, currentValue, index) => {
		const { slicedSums } = accumulator;

		for (let currentIndex = index; currentIndex > -1; currentIndex--) {
			const previousSum = hasPreviousElement(currentIndex) ? getPreviousSum(slicedSums, currentIndex) : 0;
			const sum = currentValue + previousSum;
			const slicedInfo = { currentIndex, sum };

			addSlicedSum(slicedSums, slicedInfo);

			const sliceLength = currentIndex + 1;
			const updatedInfo = {
				avg: sum / sliceLength,
				position: slicedSums[currentIndex].length - 1,
				sliceLength,
			};

			updateMinInfo(accumulator, updatedInfo);
		}

		return accumulator;
	};
}
