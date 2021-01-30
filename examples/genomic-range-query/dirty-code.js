function rangeHasNucleotide({ startIndex, endIndex }, positions) {
	const startPosition = positions.find(p => p >= startIndex);
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

	return P.reduce((acc, cur, index) => {
		const startIndex = cur;
		const endIndex = Q[index];

		if (rangeHasNucleotide({ startIndex, endIndex }, A)) {
			return [...acc, 1];
		} else if (rangeHasNucleotide({ startIndex, endIndex }, C)) {
			return [...acc, 2];
		} else if (rangeHasNucleotide({ startIndex, endIndex }, G)) {
			return [...acc, 3];
		} else {
			return [...acc, 4];
		}
	}, []);
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
console.log(solution("TTTTTTTTT", [0, 2, 3], [4, 5, 6]));
console.log(solution("ACGTACGT", [3, 4, 5], [4, 5, 6]));
