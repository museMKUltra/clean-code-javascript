function solution(A) {
	const sumsOfArray = A.reduce(
		(acc, cur, index) => {
			return {
				sumOfElements: acc.sumOfElements + cur,
				sumOfOrders: acc.sumOfOrders + index + 1,
			};
		},
		{ sumOfElements: 0, sumOfOrders: 0 }
	);

	return sumsOfArray.sumOfOrders + A.length + 1 - sumsOfArray.sumOfElements;
}

console.log(solution([2, 3, 1, 5]));
