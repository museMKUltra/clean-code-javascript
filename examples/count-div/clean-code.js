function getRangeLength(startInt, endInt) {
	return endInt - startInt + 1;
}

function getContinuousIntegers(A, B) {
	return new Array(getRangeLength(A, B)).fill(A).map((a, i) => a + i);
}

function getModIntegers(continuousIntegers, K) {
	return continuousIntegers.filter(c => c % K === 0);
}

function getModeIntegersCount(A, B, K) {
	const continuousIntegers = getContinuousIntegers(A, B);
	const modIntegers = getModIntegers(continuousIntegers, K);
	return modIntegers.length;
}

function solution(A, B, K) {
	return getModeIntegersCount(A, B, K);
}

console.log(solution(6, 11, 2));
