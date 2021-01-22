function rotateIndexProcessor(rotationCount, arr) {
	return index => (index + rotationCount) % arr.length;
}

function getCopyArray(arr) {
	return [...arr];
}

function rotateElementProcessor(getRotationIndex) {
	return (acc, cur, index) => {
		const copyArray = getCopyArray(acc);
		copyArray[getRotationIndex(index)] = cur;
		return copyArray;
	};
}

function solution(A, K) {
	const initialRotationArray = getCopyArray(A);
	const getRotationIndex = rotateIndexProcessor(K, A);
	const processElementRotation = rotateElementProcessor(getRotationIndex);

	const rotationArray = A.reduce(processElementRotation, initialRotationArray);
	return rotationArray;
}

console.log(solution([1, 2, 3], 2));
