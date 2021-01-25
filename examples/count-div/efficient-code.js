const NO_MODULO_EXCEPTION_MESSAGE = "no modulo number";

function isExactDivision(numerator, denominator) {
	return numerator % denominator === 0;
}
function getStartInteger(numerator, denominator) {
	return numerator < denominator ? denominator : numerator;
}

function getFirstModInteger(numerator, denominator) {
	let integer = getStartInteger(numerator, denominator);
	while (isGreaterAndEqual(integer, denominator)) {
		if (isExactDivision(integer, denominator)) return integer;
		integer++;
	}
}

function isGreaterAndEqual(number1, number2) {
	return number1 >= number2;
}

function isEqualZero(number) {
	return number === 0;
}

function getEndNumber(A, B, K) {
	const firstModInteger = isEqualZero(A) ? A : getFirstModInteger(A, K);
	if (!isGreaterAndEqual(B, firstModInteger)) {
		throw NO_MODULO_EXCEPTION_MESSAGE;
	}
	return B - firstModInteger;
}

function getCountOfModuloNumber(numerator, denominator) {
	return ~~(numerator / denominator) + 1;
}

function isNoModuloException(e) {
	return e === NO_MODULO_EXCEPTION_MESSAGE;
}

function solution(A, B, K) {
	try {
		const endNumber = getEndNumber(A, B, K);
		return getCountOfModuloNumber(endNumber, K);
	} catch (e) {
		if (isNoModuloException(e)) return 0;
		throw e;
	}
}

console.log(solution(101, 1230000, 10000));
