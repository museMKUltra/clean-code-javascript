function solution(A) {
	const sortedArray = A.sort((a, b) => a - b);
	const { isPermutation } = sortedArray.reduce(
		(acc, cur) => {
			let { isPermutation, elementValue } = acc;
			if (cur !== elementValue + 1) {
				isPermutation = false;
			}
			elementValue = cur;
			return { isPermutation, elementValue };
		},
		{ isPermutation: true, elementValue: 0 }
	);
	return isPermutation ? 1 : 0;
}

console.log(solution([4, 1, 3]));
