function getSumOfNumbers(A) {
	return A.reduce((a, b) => a + b);
}

function getMinimalNumber(number1, number2) {
	return number1 < number2 ? number1 : number2;
}

function getAbsoluteNumber(number) {
	return Math.abs(number);
}

function processDifferences() {
	return (acc, cur, index) => {
		const { sumOfAllNumbers, isIndexLegal } = acc;
		let { minimalDifference, sumOfFirstPart } = acc;

		if (!isIndexLegal(index)) return acc;
		sumOfFirstPart += cur;

		const difference = getAbsoluteDifference(sumOfFirstPart, sumOfAllNumbers);
		minimalDifference = getMinimalNumber(difference, minimalDifference);

		return { minimalDifference, sumOfFirstPart, sumOfAllNumbers, isIndexLegal };
	};
}

function getAbsoluteDifference(sumOfFirstPart, sumOfAllNumbers) {
	const sumOfSecondPart = sumOfAllNumbers - sumOfFirstPart;
	const absoluteDifference = getAbsoluteNumber(sumOfFirstPart - sumOfSecondPart);

	return absoluteDifference;
}

function validateIndex(limit) {
	return index => index <= limit;
}

function getInitialAccumulator(A) {
	const sumOfAllNumbers = getSumOfNumbers(A);
	const initialDifference = getAbsoluteDifference(A[0], sumOfAllNumbers);

	return {
		minimalDifference: initialDifference,
		sumOfFirstPart: 0,
		sumOfAllNumbers,
		isIndexLegal: validateIndex(A.length - 2),
	};
}

function getMinimalDifference(A) {
	const initialAccumulator = getInitialAccumulator(A);
	const { minimalDifference } = A.reduce(processDifferences(), initialAccumulator);

	return minimalDifference;
}

function solution(A) {
	return getMinimalDifference(A);
}

console.log(solution([-1000, 1000]));
