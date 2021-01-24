function solution(A) {
	const positiveIntegers = A.filter(a => a > 0);
	const sortedPositives = positiveIntegers.sort((a, b) => a - b);
	const smallestInteger = sortedPositives.reduce((acc, cur) => {
		if (cur === acc) {
			return acc + 1;
		}
		return acc;
	}, 1);
	return smallestInteger;
}

console.log(solution([-1, 3, 2, 1, -3, 5]));
