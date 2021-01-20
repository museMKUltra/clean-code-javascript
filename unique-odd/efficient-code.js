function solution(A) {
	// return A.reduce((a, b) => (a > b ? a - b : a + b));
	return A.reduce((a, b) => a ^ b);
}

console.log(solution([3, 3, 9, 9, 7, 3, 9, 9, 3]));
