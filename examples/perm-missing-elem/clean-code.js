function processAdditions() {
	return (acc, cur, index) => {
		let { sumOfElements, sumOfOrders } = acc;
		sumOfElements += cur;
		sumOfOrders += index + 1;
		return { sumOfElements, sumOfOrders };
	};
}

function addUpArraySum(A) {
	const initialSums = { sumOfElements: 0, sumOfOrders: 0 };
	const sumsOfArray = A.reduce(processAdditions(), initialSums);
	return sumsOfArray;
}

function getNextOrderOfLast(A) {
	return A.length + 1;
}

function getMissingInteger(A) {
	const { sumOfElements, sumOfOrders } = addUpArraySum(A);
	return sumOfOrders + getNextOrderOfLast(A) - sumOfElements;
}

function solution(A) {
	return getMissingInteger(A);
}

console.log(solution([2, 3, 1, 5]));
