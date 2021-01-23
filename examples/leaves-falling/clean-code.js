function sameNumberDeterminer(exceptedNumber) {
	return number => number === exceptedNumber;
}

function getRecordedLeafPosition(obj, positionIndex) {
	let { fallingPositions, fallingCount } = obj;
	const positionHasLeaf = sameNumberDeterminer(0);
	if (positionHasLeaf(fallingPositions[positionIndex])) {
		fallingPositions[positionIndex] = 1;
		fallingCount++;
	}
	return { fallingPositions, fallingCount };
}

function processFallingPosition(X) {
	return (acc, cur, index) => {
		const leafHasAllFallen = sameNumberDeterminer(X);
		if (leafHasAllFallen(acc.fallingCount)) return acc;

		const { fallingPositions, fallingCount } = getRecordedLeafPosition(acc, cur - 1);

		let { lastFallingIndex } = acc;
		if (leafHasAllFallen(fallingCount)) lastFallingIndex = index;

		return { fallingPositions, fallingCount, lastFallingIndex };
	};
}

function getEarliestTime(X, A) {
	const initialAccumulator = { fallingPositions: new Array(X).fill(0), fallingCount: 0, lastFallingIndex: -1 };
	const { lastFallingIndex } = A.reduce(processFallingPosition(X), initialAccumulator);
	return lastFallingIndex;
}

function solution(X, A) {
	return getEarliestTime(X, A);
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
