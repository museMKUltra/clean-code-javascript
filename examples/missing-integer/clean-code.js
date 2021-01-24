function getPositiveIntegers(A) {
	return A.filter(a => a > 0);
}

function getSortedIntegers(positiveIntegers) {
	return positiveIntegers.sort((a, b) => a - b);
}

function isTheSameNumber(currentInteger, smallestNumber) {
	return currentInteger === smallestNumber;
}

function processSmallestInteger(smallestNumber, currentInteger) {
	return isTheSameNumber(currentInteger, smallestNumber) ? smallestNumber + 1 : smallestNumber;
}

function getSmallestInteger(sortedPositives) {
	const initialSmallestInter = 1;
	return sortedPositives.reduce(processSmallestInteger, initialSmallestInter);
}

function chainingOperations(operations) {
	return source => operations.reduce((arr, fun) => fun(arr), source);
}

function solution(A) {
	const getMissingInteger = chainingOperations([getPositiveIntegers, getSortedIntegers, getSmallestInteger]);
	return getMissingInteger(A);
}

console.log(solution([-1, 3, 2, 1, -3, 5]));
