/*
 @jest-environment jsdom
*/

const addition = require ("../calc");

describe ("Calculator", () => {
    describe ("Addition function", () => {
        test ("should return 42 for 20 + 22", () => {
            expect (addition (20, 22)). toBe (42);
        });
        test ("should return 42 for 20 + 22", () => {
            expect (addition (50, 23)). toBe (73);
        });
    });

    describe ("Subtraction function", () => {

    });

    describe ("Multiply function", () => {

    });

    describe ("Division function", () => {

    });
})