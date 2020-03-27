"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
const Decorators = __importStar(require("./Decorators"));
const Assert = __importStar(require("./Assert"));
module.exports = {
    ClassTest: Decorators.ClassTest,
    Test: Decorators.Test,
    assertTrue: Assert.assertTrue,
    assertEquals: Assert.assertEquals,
    assertArrayEquals: Assert.assertArrayEquals
};
