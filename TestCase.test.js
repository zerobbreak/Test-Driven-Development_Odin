import { capitalize } from "./TestCase"
import { reverseString } from "./TestCase";
import { Calculator } from "./TestCase";
import { caesarCipher } from "./TestCase";
import { analyzeArray } from "./TestCase";

describe("Testing various cases on testing practice", () => {
    test("Capitalize first letter in the string", () => {
        expect(capitalize("hello")).toBe("Hello")
    });

    test("String text is reversed", () => {
        expect(reverseString("hello")).toBe("olleh")
    });

    describe("Testing calculations for the basic operation", () => {
        test("Addtion", () => {
            expect(Calculator.add(3, 6)).toBe(9);
        });
        test("Substraction", () => {
            expect(Calculator.substract(6, 3)).toBe(3);
        });
        test("Division", () => {
            expect(Calculator.divide(4, 2)).toBe(2);
        });
        test("Division by zero Error", () => {
            expect(Calculator.divide(4, 0)).toBe("Division by Zero")
        });
        test("Multiplication", () => {
            expect(Calculator.multiply(2, 4)).toBe(8);
        });
    })

    test("Caeasar Cipher Encription test", () => {
        expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs")
    });

    test("Analyzing the Array", () => {
        const object = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 })
    })
})