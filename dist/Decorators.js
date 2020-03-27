"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colors_1 = __importStar(require("./Colors"));
function ClassTest(constructor) {
    if (!constructor.prototype._passed && !constructor.prototype._failed) {
        throw new Error("There are no tests to run.");
    }
    console.log(`\nPassed: ${constructor.prototype._passed}`);
    console.log(`Failed: ${constructor.prototype._failed}`);
}
exports.ClassTest = ClassTest;
function Test(target, propertyKey, descriptor) {
    var _a;
    if (!target.constructor.prototype._passed) {
        target.constructor.prototype._passed = 0;
    }
    if (!target.constructor.prototype._failed) {
        target.constructor.prototype._failed = 0;
    }
    console.group(`\nRunning ${propertyKey}`);
    try {
        descriptor.value();
        target.constructor.prototype._passed += 1;
        console.log(Colors_1.makeColored("Passed.", Colors_1.default.FgGreen));
    }
    catch (err) {
        target.constructor.prototype._failed += 1;
        let stackStr = err.stack;
        let formattedStackStr = "";
        (_a = stackStr.match(/(?:at Object\..+\(.+\\(.+)\))/g)) === null || _a === void 0 ? void 0 : _a.forEach(value => {
            formattedStackStr += `\n    ${value}`;
        });
        console.log(Colors_1.makeColored(err + formattedStackStr, Colors_1.default.FgRed));
    }
    console.groupEnd();
}
exports.Test = Test;
