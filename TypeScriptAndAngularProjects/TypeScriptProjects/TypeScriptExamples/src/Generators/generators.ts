function* fourToSix(): IterableIterator<number> {
    yield 4;
    yield 5;
    yield 6;
}

function* numbers(): IterableIterator<number> {
    yield 1;
    yield 2;
    yield 3;
    yield* fourToSix();
    yield 7;
    yield 8;
    yield 9;
}

function* wordPairs(text: string): IterableIterator<string[]> {
    let words = text.split(" ");
    for (let index = 0; index < words.length - 1; index++) {
        yield [words[index], words[index + 1]];
    }
}


export function runDemo() {
    const numbersGenerator = numbers();
    for (const number of numbersGenerator) {
        console.log(number);
    }

    const pairsGenerator = wordPairs("This is some text that we will parse.");
    for (const [first, second] of pairsGenerator) {
        console.log(`[${first}, ${second}]`);
    }
}
