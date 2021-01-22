function mapWithOperation(number) {
	return arr => arr.map(a => a + number);
}

function equalizerInIndex(expectedIndex) {
	return index => index === expectedIndex;
}

function arrayHasSeparated(i, index) {
	return i < index;
}

function calculateDifference(index, cur) {
	return (a, i) => {
		if (arrayHasSeparated(i, index)) {
			return a - cur;
		} else {
			return a + cur;
		}
	};
}

function processDifferences(A) {
	return (acc, cur, index) => {
		const isFirstIndex = equalizerInIndex(0);
		if (isFirstIndex(index)) {
			const getElementsAddCurrent = mapWithOperation(cur);
			return getElementsAddCurrent(acc);
		}

		const isLastIndex = equalizerInIndex(A.length - 1);
		if (isLastIndex(index)) {
			const getElementsMinusCurrent = mapWithOperation(-cur);
			return getElementsMinusCurrent(acc);
		}

		return acc.map(calculateDifference(index, cur));
	};
}

function getMinimalNumber(arr) {
	return Math.min(...arr.map(d => Math.abs(d)));
}

function getMinimalDifference(A) {
	const initialDifferences = new Array(A.length).fill(0);
	const differencesOfArray = A.reduce(processDifferences(A), initialDifferences);
	const minDifference = getMinimalNumber(differencesOfArray);
	return minDifference;
}

function solution(A) {
	return getMinimalDifference(A);
}

console.log(solution([3, 1, 2, 4, 3]));
