function solution(N) {
	const binaryNumber = (N >>> 0).toString(2);
	const numberArray = binaryNumber.split("");
	const { maxGapLength } = numberArray.reduce(
		(acc, cur) => {
			const integer = parseInt(cur);
			const newAcc = { ...acc };
			if (integer === 1) {
				newAcc.charIsOne = true;
				if (acc.gapHasStated) {
					newAcc.gapCount++;
					newAcc.gapHasStated = false;
					newAcc.maxGapLength = acc.currentLength > acc.maxGapLength ? acc.currentLength : acc.maxGapLength;
					newAcc.currentLength = 0;
				}
			} else {
				newAcc.charIsOne = false;
				newAcc.currentLength++;
				if (acc.charIsOne) {
					newAcc.gapHasStated = true;
				}
			}

			return newAcc;
		},
		{ maxGapLength: 0, currentLength: 0, charIsOne: false, gapHasStated: false, gapCount: 0 }
	);
	return maxGapLength;
}

console.log(solution(1041));
