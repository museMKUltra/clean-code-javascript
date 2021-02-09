function avg(sum, length) {
	return sum / length;
}

function solution(A) {
	let startPosition = 0;
	let minAvgSum = A[0] + A[1];
	let minLength = 2;

	for (let i = 2; i < A.length; i++) {
		const lengthTwoSum = A[i - 1] + A[i];
		const lengthThreeSum = A[i - 2] + A[i - 1] + A[i];

		const lengthTwoAvg = avg(lengthTwoSum, 2);
		const lengthThreeAvg = avg(lengthThreeSum, 3);
		const minAvg = avg(minAvgSum, minLength);

		if (lengthTwoAvg < lengthThreeAvg && lengthTwoAvg < minAvg) {
			startPosition = i - 1;
			minAvgSum = lengthTwoSum;
			minLength = 2;
		} else if (lengthThreeAvg < lengthTwoAvg && lengthThreeAvg < minAvg) {
			startPosition = i - 2;
			minAvgSum = lengthThreeSum;
			minLength = 3;
		}
	}

	return startPosition;
}

console.log(solution([1, 2, 3]));
