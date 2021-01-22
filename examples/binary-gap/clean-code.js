function getBinaryString(N) {
	return (N >>> 0).toString(2);
}

function getCharsArray(binaryNumber) {
	return binaryNumber.split("");
}

function numberIsTheSame(number, expectedNumber) {
	return number === expectedNumber;
}

function getAccumulatorWithUpdateIntegerStatus(integer, obj) {
	const copyObject = getCopyObject(obj);
	if (numberIsTheSame(integer, 1)) {
		copyObject.currentNumber = 1;
	} else {
		copyObject.currentNumber = 0;
		copyObject.gapLength++;
	}
	return copyObject;
}

function getCopyObject(obj) {
	return { ...obj };
}

function getMaxNumber(number1, number2) {
	return number2 > number1 ? number2 : number1;
}

function isGapEnd(integer, acc) {
	return numberIsTheSame(integer, 1) && acc.gapHasStated;
}

function isGapStart(integer, acc) {
	return numberIsTheSame(integer, 0) && numberIsTheSame(acc.currentNumber, 1);
}

function endedGapProcessor(gapEnd) {
	return obj => {
		const copyObject = getCopyObject(obj);
		if (gapEnd) {
			copyObject.gapCount++;
			copyObject.gapHasStated = false;
			copyObject.maxGapLength = getMaxNumber(copyObject.maxGapLength, copyObject.gapLength);
			copyObject.gapLength = 0;
		}
		return copyObject;
	};
}

function startedGapProcessor(gapStart) {
	return obj => {
		const copyObject = getCopyObject(obj);
		if (gapStart) copyObject.gapHasStated = true;
		return copyObject;
	};
}

function processAccumulator(acc, cur) {
	const integer = parseInt(cur);
	const updateAccumulator = getAccumulatorWithUpdateIntegerStatus(integer, acc);

	const gapStart = isGapStart(integer, acc);
	const getAccumulatorWithStartedGap = startedGapProcessor(gapStart);
	const startedAccumulator = getAccumulatorWithStartedGap(updateAccumulator);

	const gapEnd = isGapEnd(integer, acc);
	const getAccumulatorWithEndedGap = endedGapProcessor(gapEnd);
	const endedAccumulator = getAccumulatorWithEndedGap(startedAccumulator);

	return endedAccumulator;
}

function getMaxGapLength(charArray) {
	const initialGapDetail = { maxGapLength: 0, gapLength: 0, currentNumber: null, gapHasStated: false, gapCount: 0 };
	const { maxGapLength } = charArray.reduce(processAccumulator, initialGapDetail);
	return maxGapLength;
}

function solution(N) {
	const binaryString = getBinaryString(N);
	const charArray = getCharsArray(binaryString);
	return getMaxGapLength(charArray);
}

console.log(solution(1041));
