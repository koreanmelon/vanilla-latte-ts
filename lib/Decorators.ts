import Colors, { makeColored } from "./Colors";

export function ClassTest(constructor: Function) {
    if (!constructor.prototype._passed && !constructor.prototype._failed) {
        throw new Error("There are no tests to run.");
    }
    console.log(`\nPassed: ${constructor.prototype._passed}`);
    console.log(`Failed: ${constructor.prototype._failed}`);

}

export function Test(target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
    if (!target.constructor.prototype._passed) { target.constructor.prototype._passed = 0; }
    if (!target.constructor.prototype._failed) { target.constructor.prototype._failed = 0; }

    console.group(`\nRunning ${propertyKey}`);
    try {
        descriptor.value();
        target.constructor.prototype._passed += 1;
        console.log(makeColored("Passed.", Colors.FgGreen));
    } catch (err) {
        target.constructor.prototype._failed += 1;
        let stackStr: string = err.stack;
        let formattedStackStr: string = "";
        stackStr.match(/(?:at Object\..+\(.+\\(.+)\))/g)?.forEach(value => {
            formattedStackStr += `\n    ${value}`;
        });
        console.log(makeColored(err + formattedStackStr, Colors.FgRed));
    }
    console.groupEnd();
}