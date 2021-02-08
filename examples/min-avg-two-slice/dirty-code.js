function solution(A) {
	const { minAvg } = A.reduce(
		(acc, cur, index) => {
			const { slicedSums, minAvg } = acc;
			let { value, startPosition } = minAvg;
			let currentIndex = index;

			do {
				const length = currentIndex + 1;
				const previousIndex = currentIndex - 1;
				const previousSum = length > 1 ? slicedSums[previousIndex][slicedSums[previousIndex].length - 1] : 0;
				const sum = cur + previousSum;

				if (slicedSums.length === currentIndex) {
					slicedSums.push([]);
				}
				slicedSums[currentIndex].push(sum);

				if (length > 1) {
					const avg = sum / length;
					if (value === null) {
						value = avg;
						startPosition = slicedSums[currentIndex].length - 1;
					} else if (avg < value) {
						value = avg;
						startPosition = slicedSums[currentIndex].length - 1;
					}
				}

				currentIndex -= 1;
			} while (currentIndex > -1);

			return {
				slicedSums,
				minAvg: {
					value,
					startPosition,
				},
			};
		},
		{
			slicedSums: [],
			minAvg: {
				value: null,
				startPosition: null,
			},
		}
	);
	return minAvg.startPosition;
}

console.log(solution([1, 2, 3]));
