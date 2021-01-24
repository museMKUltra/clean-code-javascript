function solution(N, A) {
	const partialUpdatedCounters = new Array(N).fill(0);
	const { lastMaxCount } = A.reduce(
		(acc, cur) => {
			if (cur === N + 1) {
				return {
					...acc,
					lastMaxCount: acc.currentMaxCount,
				};
			}
			const counter = partialUpdatedCounters[cur - 1];
			if (counter < acc.lastMaxCount) {
				partialUpdatedCounters[cur - 1] = acc.lastMaxCount + 1;
			} else {
				partialUpdatedCounters[cur - 1]++;
			}
			return {
				...acc,
				partialUpdatedCounters: partialUpdatedCounters,
				currentMaxCount: partialUpdatedCounters[cur - 1] > acc.currentMaxCount ? partialUpdatedCounters[cur - 1] : acc.currentMaxCount,
			};
		},
		{ currentMaxCount: 0, lastMaxCount: 0 }
	);
	return partialUpdatedCounters.map(p => (p < lastMaxCount ? lastMaxCount : p));
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
