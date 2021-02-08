import { processAverageOfSlices } from "./slice-processor.js";

function getStartPosition(A) {
	const initialAccumulator = { slicedSums: [], minAvg: null, startPosition: null };
	const { startPosition } = A.reduce(processAverageOfSlices(), initialAccumulator);

	return startPosition;
}

function solution(A) {
	return getStartPosition(A);
}

console.log(solution([1, 2, 3]));
