function rangeHasNucleotide({ startIndex, endIndex }, positions) {
	let startPosition = undefined;
	for (let i = 0; i < positions.length; i++) {
		if (positions[i] >= startIndex) {
			startPosition = positions[i];
			break;
		}
	}
	if (startPosition === undefined) return false;

	return endIndex >= startPosition;
}

function solution(S, P, Q) {
	const { A, C, G } = S.split("").reduce(
		(acc, cur, index) => {
			const { A, C, G } = acc;
			switch (cur) {
				case "A":
					A.push(index);
					break;
				case "C":
					C.push(index);
					break;
				case "G":
					G.push(index);
					break;
			}
			return { A, C, G };
		},
		{ A: [], C: [], G: [] }
	);

	const acc = [];

	for (let i = 0; i < P.length; i++) {
		const startIndex = P[i];
		const endIndex = Q[i];

		if (rangeHasNucleotide({ startIndex, endIndex }, A)) {
			acc.push(1);
		} else if (rangeHasNucleotide({ startIndex, endIndex }, C)) {
			acc.push(2);
		} else if (rangeHasNucleotide({ startIndex, endIndex }, G)) {
			acc.push(3);
		} else {
			acc.push(4);
		}
	}

	return acc;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
console.log(solution("TTTTTTTTT", [0, 2, 3], [4, 5, 6]));
console.log(solution("ACGTACGT", [3, 4, 5], [4, 5, 6]));
