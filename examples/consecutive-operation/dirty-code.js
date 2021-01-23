function solution(N, A) {
	const { counters } = A.reduce(
		(acc, cur) => {
			if (cur === N + 1) {
				return {
					counters: new Array(acc.counters.length).fill(acc.maxCount),
					maxCount: acc.maxCount,
				};
			}
			const counters = [...acc.counters];
			counters[cur - 1]++;
			return {
				counters,
				maxCount: counters[cur - 1] > acc.maxCount ? counters[cur - 1] : acc.maxCount,
			};
		},
		{ counters: new Array(N).fill(0), maxCount: 0 }
	);
	return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
