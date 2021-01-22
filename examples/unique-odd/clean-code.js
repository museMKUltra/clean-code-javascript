function isIndexExist(reserveIndex) {
	return reserveIndex > -1;
}

function getIndexInArray(acc, cur) {
	return acc.findIndex(a => a === cur);
}

function getCopyArray(acc) {
	return [...acc];
}

function processOdds(acc, cur) {
	const reserveIndex = getIndexInArray(acc, cur);
	const copyArray = getCopyArray(acc);
	if (isIndexExist(reserveIndex)) {
		copyArray[reserveIndex] = 0;
	} else {
		copyArray[copyArray.length] = cur;
	}
	return copyArray;
}

function getUniqOdd(A) {
	return A.reduce(processOdds, []).find(a => a !== 0);
}

function solution(A) {
	return getUniqOdd(A);
}

console.log(solution([3, 3, 9, 9, 7, 3, 9, 9, 3]));
