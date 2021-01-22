function calculateDistance(Y, X) {
	return Y - X;
}

function getSteps(distance, D) {
	return Math.ceil(distance / D);
}

function determineNumberOfJumps(Y, X, D) {
	const distance = calculateDistance(Y, X);
	const steps = getSteps(distance, D);
	return steps;
}

function solution(X, Y, D) {
	return determineNumberOfJumps(Y, X, D);
}

console.log(solution(10, 85, 30));
