function rotateIndexProcessor(rotationCount, arr) {
	return index => (index + rotationCount) % arr.length;
}

function solution(A, K) {
	const getRotationIndex = rotateIndexProcessor(K, A);
	const { rotationArray } = A.reduce(
		(acc, cur, index) => {
			const copyArray = [...acc.rotationArray];
			copyArray[getRotationIndex(index)] = cur;
			return { rotationArray: copyArray };
		},
		{ rotationArray: [...A] }
	);
	return rotationArray;
}

console.log(solution([1, 2, 3], 2));
