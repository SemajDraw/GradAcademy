
function concatenate(lhs: string, rhs: string): string;
function concatenate(lhs: number, rhs: number): number;
function concatenate(lhs: any, rhs: any): any {
    return lhs + rhs
}

export function runDemo() {
    let numberResult = concatenate(12, 23);
    let stringResult = concatenate("abc", "def");

    // let illegal = concatenate(12, "wed");

    console.log(numberResult);
    console.log(stringResult);
}
