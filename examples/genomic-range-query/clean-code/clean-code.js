import { processImpactFactors, processNucleotidePositions } from "./nucleotides-processor.js";
import { getCharsArray, getMergedArray } from "./handle-array.js";

function getImpactFactors({ P, Q }, { A, C, G }) {
	const mergedArray = getMergedArray(P, Q);

	return mergedArray.reduce(processImpactFactors(A, C, G), []);
}

function getNucleotidePositions(S) {
	const initialPositionsAccumulator = { A: [], C: [], G: [] };

	return getCharsArray(S).reduce(processNucleotidePositions(), initialPositionsAccumulator);
}

function solution(S, P, Q) {
	const { A, C, G } = getNucleotidePositions(S);

	return getImpactFactors({ P, Q }, { A, C, G });
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
console.log(solution("TTTTTTTTT", [0, 2, 3], [4, 5, 6]));
console.log(solution("ACGTACGT", [3, 4, 5], [4, 5, 6]));
