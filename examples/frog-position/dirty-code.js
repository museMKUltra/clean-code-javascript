function solution(X, Y, D) {
	const distance = Y - X;
	const steps = Math.ceil(distance / D);
	return steps;
}

console.log(solution(10, 85, 30));
