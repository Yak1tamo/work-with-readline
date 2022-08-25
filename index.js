#!/usr/bin/env node

const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
const rl = readline.createInterface({ input, output })
const randomNumber = Math.round(Math.random() * 100)

console.log(`Загадано число в диапазоне от 0 до 100`)

rl.on('line', (answer) => {
	const numAnswer = Number(answer)
	if (isNaN(numAnswer) || !isFinite(numAnswer)) {
		console.log('Введите число')
	}
	else if (numAnswer > randomNumber) {
		console.log('Меньше')
	}
	else if (numAnswer < randomNumber) {
		console.log('Больше')
	}
	else {
		console.log(`Отгадано число ${randomNumber}`)
		rl.close()
	}
})