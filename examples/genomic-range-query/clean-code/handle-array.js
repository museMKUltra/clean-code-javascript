export function getMergedArray(arr1, arr2) {
	return arr1.map((a, i) => [a, arr2[i]]);
}

export function getCharsArray(string) {
	return string.split("");
}
