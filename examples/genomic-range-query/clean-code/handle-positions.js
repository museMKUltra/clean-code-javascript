function positionExist(position) {
	return position !== undefined;
}

function findStartPosition(positions, startIndex) {
	return positions.find(p => p >= startIndex);
}

function containNucleotide(endIndex, startPosition) {
	return endIndex >= startPosition;
}

export function rangeHasNucleotide({ startIndex, endIndex }, positions) {
	const startPosition = findStartPosition(positions, startIndex);
	if (!positionExist(startPosition)) return false;

	return containNucleotide(endIndex, startPosition);
}
