/**
 * Fizz Buzz 数列と変換規則を扱うFizzBuzz クラス
 */
export class FizzBuzz {
	convert(input: number): string | undefined {
		if (input % (3 * 5) === 0) {
			return "FizzBuzz"
		}
		if (input % 3 === 0) {
			return "Fizz"
		}
		if (input % 5 === 0) {
			return "Buzz"
		}
		return input.toString()
	}
}