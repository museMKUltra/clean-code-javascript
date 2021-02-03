import { processImpactFactors, processNucleotidePositions } from "./nucleotides-processor.js";
import { getCharsArray, getMergedArray } from "./handle-array.js";

function getNucleotidePositions(S) {
	const initialPositionsAccumulator = { A: [], C: [], G: [], T: [] };
	const nucleotides = getCharsArray(S);

	return nucleotides.reduce(processNucleotidePositions(), initialPositionsAccumulator);
}

function getImpactFactors({ P, Q }, { A, C, G, T }) {
	const initialImpactAccumulator = { factors: [] };
	const impactRanges = getMergedArray(P, Q);

	return impactRanges.reduce(processImpactFactors({ A, C, G, T }), initialImpactAccumulator);
}

function solution(S, P, Q) {
	const { A, C, G, T } = getNucleotidePositions(S);
	const { factors } = getImpactFactors({ P, Q }, { A, C, G, T });

	return factors;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
console.log(solution("TTTTTTTTT", [0, 2, 3], [4, 5, 6]));
console.log(solution("ACGTACGT", [3, 4, 5], [4, 5, 6]));
