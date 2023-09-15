# Notes

## Description

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of `1234` is `10011010010`, so the function should return `5` in this case

## Domain

- integer (non-negative)
- number of bits equal to one
- binary representation

## Rules

- input: integer
- convert the number to binary
- convert the binary to string
- count number of ones

## Backlog

## Legend

- 🟩 TODO
- 🚧 IN PROGRESS
- ✅ DONE
- ❌ ERROR


### Pomodoro 1 🍅:

- initial setup
  - update README ✅
  - update NOTES ✅
  - update package.json ✅
  - update code/test files ✅
- domain and rules description ✅
- perform the 'canary' test just to check if the structure works ✅
- it should return 1 for input equal to 1 ✅
- create function to convert to binary (intToBin)
  - it should return '1' to input equal to 1 ✅

### Pomodoro 2 🍅:
- intToBin
  - it should return '10' to input equal to 2 ✅

### Pomodoro 3 🍅:
- intToBin
  - it should return '11000000111001' to input equal to 12345 ✅
- it should return 1 to input equal to 2 ✅
- it should return 2 to input equal to 10 ✅
- it should return 6 to input equal to 12345 ✅
- refactored removing intToBin ✅
- refactored using split/filter ✅