function solution(A) {
	const differencesOfArray = A.reduce((acc, cur, index) => {
		if (index === 0) {
			return acc.map(a => a + cur);
		}
		if (index === A.length - 1) {
			return acc.map(a => a - cur);
		}
		return acc.map((a, i) => {
			if (i < index) {
				return a - cur;
			} else {
				return a + cur;
			}
		});
	}, new Array(A.length).fill(0));
	const minDifference = Math.min(...differencesOfArray.map(d => Math.abs(d)));
	return minDifference;
}

console.log(solution([3, 1, 2, 4, 3]));
