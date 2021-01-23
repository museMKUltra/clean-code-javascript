const maxExceptionMsg = "MAX_COUNTER";

class CounterAccumulator {
	constructor(counterLength, positions) {
		this.counters = new Array(counterLength).fill(0);
		this.positions = positions;
		this.currentMaxCount = 0;
		this.lastMaxCount = 0;
	}

	setCounter(index, value) {
		this.counters[index] = value;
	}

	updateLastMaxCount(value) {
		this.lastMaxCount = value;
	}

	updateCurrentMaxCount(value) {
		this.currentMaxCount = value;
	}

	getUpdatedCounter() {
		return this.counters.map(p => {
			const updatedCounter = p < this.lastMaxCount ? this.lastMaxCount : p;
			return updatedCounter;
		});
	}
}

function isMaxMethod(position, accumulator) {
	return position === accumulator.counters.length + 1;
}

function didUpdateYet(counter, counters) {
	return counter >= counters.lastMaxCount;
}

function isCounterLarger(updatedCounter, counters) {
	return updatedCounter > counters.currentMaxCount;
}

function updateCurrentMax(updatedCounter, acc) {
	if (isCounterLarger(updatedCounter, acc)) {
		acc.updateCurrentMaxCount(updatedCounter);
	}
}

function getUpdatedCounter(position, acc) {
	const index = position - 1;
	const counter = acc.counters[index];

	const valueToUpdate = didUpdateYet(counter, acc) ? counter : acc.lastMaxCount;
	const updatedCounter = valueToUpdate + 1;
	acc.setCounter(index, updatedCounter);

	return updatedCounter;
}

function checkMaxMethod(position, acc) {
	if (isMaxMethod(position, acc)) {
		acc.updateLastMaxCount(acc.currentMaxCount);
		throw maxExceptionMsg;
	}
}

function accumulateCounter(position, acc) {
	try {
		checkMaxMethod(position, acc);

		const updatedCounter = getUpdatedCounter(position, acc);
		updateCurrentMax(updatedCounter, acc);
	} catch (e) {
		if (e === maxExceptionMsg) return;
		throw e;
	}
}

function accumulateCounters(acc) {
	for (let position of acc.positions) {
		accumulateCounter(position, acc);
	}
}

function solution(N, A) {
	const accumulator = new CounterAccumulator(N, A);
	accumulateCounters(accumulator);

	return accumulator.getUpdatedCounter();
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
