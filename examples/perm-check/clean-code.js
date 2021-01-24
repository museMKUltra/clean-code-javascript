function getSortedIntegers(A) {
	return A.sort((a, b) => a - b);
}

function isContinuousNumbers(integer1, integer2) {
	return integer1 + 1 === integer2;
}

function processPermutation(accumulator, currentValue) {
	let { isContinuous, elementValue } = accumulator;
	isContinuous = isContinuousNumbers(elementValue, currentValue) ? isContinuous : false;
	elementValue = currentValue;
	return { isContinuous, elementValue };
}

function arrayIsContinuous(sortedIntegers) {
	const initialAccumulator = { isContinuous: true, elementValue: 0 };
	const { isContinuous } = sortedIntegers.reduce(processPermutation, initialAccumulator);
	return isContinuous;
}

function translateBoolean(isContinuous) {
	return isContinuous ? 1 : 0;
}

function chainingMethods(methods) {
	return source => methods.reduce((src, fun) => fun(src), source);
}

function solution(A) {
	const getSignOfPermutation = chainingMethods([getSortedIntegers, arrayIsContinuous, translateBoolean]);
	return getSignOfPermutation(A);
}

console.log(solution([4, 1, 3, 2]));
