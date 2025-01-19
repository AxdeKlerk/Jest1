/*
 @jest-environment jsdom
*/

const buttonClick = require ("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id =`p`></>";
});

describe("DOM tests", () => {
    Test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById(`p`).innerHTML).toEqual("You Clicked");
    });
});