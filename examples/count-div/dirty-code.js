function solution(A, B, K) {
	let sum = 0;
	for (let i = A; i <= B; i++) {
		sum = i % K === 0 ? sum + 1 : sum;
	}
	return sum;
}

console.log(solution(6, 11, 2));
