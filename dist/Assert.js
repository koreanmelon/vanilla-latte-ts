"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertTrue(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
exports.assertTrue = assertTrue;
function assertEquals(expected, actual, message, tolerance) {
    if (typeof expected != typeof actual) {
        throw new Error("Cannot compare objects of different types.");
    }
    if (expected instanceof Array || actual instanceof Array) {
        throw new Error("Use assertArrayEquals() to compare two arrays.");
    }
    if (typeof expected == "number") {
        if (!tolerance) {
            throw new Error("Must specify a tolerance when comparing two numbers.");
        }
        return expected > actual + tolerance || expected < actual - tolerance;
    }
    else {
        return expected == actual;
    }
}
exports.assertEquals = assertEquals;
function assertArrayEquals(expected, actual, message) {
    if (expected.length != actual.length) {
        throw new Error("Arrays are not of equal length.");
    }
    for (let i in expected) {
        if (expected[i] != actual[i]) {
            throw new Error(message + `\n    expected: ${expected}\n    actual: ${actual}\n`);
        }
    }
}
exports.assertArrayEquals = assertArrayEquals;
