export function assertTrue(condition: boolean, message?: string) {
    if (!condition) {
        throw new Error(message);
    }
}

export function assertEquals(expected: number, actual: number, message?: string, tolerance?: number): boolean;
export function assertEquals(expected: any, actual: any, message?: string): boolean;
export function assertEquals(expected: any, actual: any, message?: string, tolerance?: number): boolean {
    if (typeof expected != typeof actual) { throw new Error("Cannot compare objects of different types."); }
    if (expected instanceof Array || actual instanceof Array) { throw new Error("Use assertArrayEquals() to compare two arrays."); }
    if (typeof expected == "number") {
        if (tolerance == undefined) { throw new Error("Must specify a tolerance when comparing two numbers."); }
        if (expected >= actual + tolerance && expected <= actual - tolerance) {
            return true;
        } else {
            throw new Error(message + `\n    expected: ${expected}\n    actual: ${actual}\n`);
        }
    } else {
        return expected == actual;
    }
}

export function assertArrayEquals(expected: any[], actual: any[], message?: string) {
    if (expected.length != actual.length) { throw new Error("Arrays are not of equal length."); }
    for (let i in expected) {
        if (expected[i] != actual[i]) { throw new Error(message + `\n    expected: ${expected}\n    actual: ${actual}\n`); }
    }
}
