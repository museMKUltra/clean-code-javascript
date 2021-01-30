import { NUCLEOTIDES_MAP } from "./nucleotides-mapping.js";
import { rangeHasNucleotide } from "./handle-positions.js";

export function processNucleotidePositions() {
	return (acc, cur, index) => {
		const { a, c, g } = NUCLEOTIDES_MAP;
		const { A, C, G } = acc;

		switch (cur) {
			case a.character:
				A.push(index);
				break;
			case c.character:
				C.push(index);
				break;
			case g.character:
				G.push(index);
				break;
		}
		return { A, C, G };
	};
}

export function processImpactFactors(A, C, G) {
	return (acc, cur) => {
		const { a, c, g, t } = NUCLEOTIDES_MAP;
		const startIndex = cur[0];
		const endIndex = cur[1];

		if (rangeHasNucleotide({ startIndex, endIndex }, A)) {
			return [...acc, a.factor];
		} else if (rangeHasNucleotide({ startIndex, endIndex }, C)) {
			return [...acc, c.factor];
		} else if (rangeHasNucleotide({ startIndex, endIndex }, G)) {
			return [...acc, g.factor];
		} else {
			return [...acc, t.factor];
		}
	};
}
