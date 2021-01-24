function solution(X, A) {
	const { lastFallingIndex } = A.reduce(
		(acc, cur, index) => {
			let { fallingPositions, fallingCount, lastFallingIndex } = acc;
			if (fallingCount === X) {
				return acc;
			}
			const positionIndex = cur - 1;
			if (fallingPositions[positionIndex] == 0) {
				fallingPositions[positionIndex] = 1;
				fallingCount++;
			}
			if (fallingCount === X) {
				lastFallingIndex = index;
			}
			return { fallingPositions, fallingCount, lastFallingIndex };
		},
		{ fallingPositions: new Array(X).fill(0), fallingCount: 0, lastFallingIndex: -1 }
	);
	return lastFallingIndex;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
