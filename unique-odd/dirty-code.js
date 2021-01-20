function solution(A) {
	return A.reduce((acc, cur) => {
		const copyArray = [...acc];
		const reserveIndex = copyArray.findIndex(a => a === cur);
		if (reserveIndex > -1) {
			copyArray[reserveIndex] = 0;
		} else {
			copyArray[copyArray.length] = cur;
		}
		return copyArray;
	}, []).find(a => a !== 0);
}

console.log(solution([3, 3, 9, 9, 7, 3, 9, 9, 3]));
