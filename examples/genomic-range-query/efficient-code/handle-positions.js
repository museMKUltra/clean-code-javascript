function findContainedNucleotide({ startIndex, endIndex }, positions) {
	for (let i = 0; i < positions.length; i++) {
		if (startIndex <= positions[i]) {
			throw {
				isNucleotideContained: positions[i] <= endIndex,
			};
		}
	}
}

export function positionsContainNucleotide([startIndex, endIndex], positions) {
	try {
		findContainedNucleotide({ startIndex, endIndex }, positions);
	} catch (e) {
		if (e.isNucleotideContained) return e.isNucleotideContained;
	}

	return false;
}
