import { NUCLEOTIDES_MAP } from "./nucleotides-mapping.js";
import { positionsContainNucleotide } from "./handle-positions.js";

export function processNucleotidePositions() {
	const { a, c, g, t } = NUCLEOTIDES_MAP;

	return (accumulator, nucleotide, index) => {
		const { A, C, G, T } = accumulator;

		switch (nucleotide) {
			case a.character:
				A.push(index);
				break;
			case c.character:
				C.push(index);
				break;
			case g.character:
				G.push(index);
				break;
			case t.character:
				T.push(index);
				break;
		}

		return { A, C, G, T };
	};
}

export function processImpactFactors({ A, C, G, T }) {
	const { a, c, g, t } = NUCLEOTIDES_MAP;

	return (accumulator, range) => {
		const { factors } = accumulator;

		if (positionsContainNucleotide(range, A)) {
			factors.push(a.factor);
		} else if (positionsContainNucleotide(range, C)) {
			factors.push(c.factor);
		} else if (positionsContainNucleotide(range, G)) {
			factors.push(g.factor);
		} else if (positionsContainNucleotide(range, T)) {
			factors.push(t.factor);
		}

		return { factors };
	};
}
