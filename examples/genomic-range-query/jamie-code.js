function solution(S, P, Q) {
	const factorMap = {
		A: 1,
		C: 2,
		G: 3,
		T: 4,
	};
	const factorArr = ["A", "C", "G", "T"];
	const outcomes = [];
	for (let i = 0; i < P.length; i++) {
		const slice = S.slice(P[i], Q[i] + 1);
		let min;
		for (let j = 0; j < Object.keys(factorMap).length; j++) {
			const char = factorArr[j];
			if (slice.indexOf(char) > -1) {
				min = factorMap[char];
				break;
			}
		}
		outcomes.push(min);
	}
	return outcomes;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
console.log(solution("TTTTTTTTT", [0, 2, 3], [4, 5, 6]));
console.log(solution("ACGTACGT", [3, 4, 5], [4, 5, 6]));
