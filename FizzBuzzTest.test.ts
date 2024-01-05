import { FizzBuzz } from "./FizzBuzzTest"

describe('convert関数（メソッド）は数を文字列に変換する', () => {
	// 準備
	const fizzBuzz = new FizzBuzz()
	
	// Nested
	describe('3の倍数のときは数の代わりに「Fizz」に変換する', () => {
		//Test
		test('3を渡すと文字列Fizzを返す', () => {
			expect(fizzBuzz.convert(3)).toBe("Fizz")
		})
	})

	// Nested
	describe('5の倍数のときは数の代わりに「Buzz」に変換する', () => {
		//Test
		test('5を渡すと文字列Buzzを返す', () => {
			expect(fizzBuzz.convert(5)).toBe("Buzz")
		})
	})

	// Nested
	describe('その他の数のときはそのまま文字列に変換する', () => {
		// Test
		test('1を渡すと文字列1を返す', () => {
			expect(fizzBuzz.convert(1)).toBe("1")
		})
	})

	// Nested
	describe('3と5両方の倍数のときは数の代わりに「FizzBuzz」に変換する', () => {
		// Test
		test('15を渡すと文字列FizzBuzzを返す', () => {
			expect(fizzBuzz.convert(15)).toBe("FizzBuzz")
		})
	})
})