import { describe, expect, it } from 'vitest'
import {
  calculateFinalScore,
  calculateTax,
  checkDigitsInName,
  sendNotification,
  waitingTime,
} from '../src/main'

describe('calculateTax', () => {
  it("should return 'Invalid Input'", () => {
    expect(calculateTax(0, 5)).toBe('Invalid Input')
    expect(calculateTax(5, 0)).toBe('Invalid Input')
    expect(calculateTax(5, -5)).toBe('Invalid Input')
    expect(calculateTax(-5, -5)).toBe('Invalid Input')
    expect(calculateTax(5, 6)).toBe('Invalid Input')
    expect(calculateTax(-5000, 2000)).toBe('Invalid Input')
    expect(calculateTax(6000, -1500)).toBe('Invalid Input')
  })

  it('should return valid tax amount', () => {
    expect(calculateTax(10000, 3000)).toBe(1400)
    expect(calculateTax(34000, 1753)).toBe(6449.400000000001)
    expect(calculateTax(5000, 1500)).toBe(700)
    expect(calculateTax(7000, 7000)).toBe(0)
  })
})

describe('sendNotification', () => {
  it("should return 'Invalid Email'", () => {
    expect(sendNotification('fahim234.hotmail.com')).toBe('Invalid Email')
    expect(sendNotification('sadia8icloud.com')).toBe('Invalid Email')
  })

  it('should send notification successfully', () => {
    expect(sendNotification('zihad@gmail.com')).toBe(
      'zihad sent you an email from gmail.com'
    )
    expect(sendNotification('farhan34@yahoo.com')).toBe(
      'farhan34 sent you an email from yahoo.com'
    )
    expect(sendNotification('nadim.naem5@outlook.com')).toBe(
      'nadim.naem5 sent you an email from outlook.com'
    )
  })
})

describe('checkDigitsInName', () => {
  /**
   *   true
   *  false
   */

  it("should return 'Invalid Input'", () => {
    expect(checkDigitsInName(['Raj'])).toBe('Invalid Input')
  })

  it('should validate names', () => {
    expect(checkDigitsInName('Raj123')).toBe(true)
    expect(checkDigitsInName('Suman')).toBe(false)
    expect(checkDigitsInName('Name2024')).toBe(true)
    expect(checkDigitsInName('!@#')).toBe(false)
    expect(checkDigitsInName('asak09')).toBe(true)
  })
})

describe('calculateFinalScore', () => {
  it('should return if eligible', () => {
    expect(
      calculateFinalScore({
        name: 'Rajib',
        testScore: 45,
        schoolGrade: 25,
        isFFamily: true,
      })
    ).toBe(true)

    expect(
      calculateFinalScore({
        name: 'Rajib',
        testScore: 45,
        schoolGrade: 25,
        isFFamily: false,
      })
    ).toBe(false)

    expect(calculateFinalScore('hello')).toBe('Invalid Input')

    expect(
      calculateFinalScore({
        name: 'Rajib',
        testScore: 15,
        schoolGrade: 25,
        isFFamily: true,
      })
    ).toBe(false)
  })
})

describe('waitingTime', () => {
  it('should return waiting time', () => {
    expect(waitingTime([3, 5, 7, 11, 6], 10)).toBe(24)
    expect(waitingTime([13, 2], 6)).toBe(24)
    expect(waitingTime([13, 2, 6, 7, 10], 6)).toBe(0)
    expect(waitingTime(7 , 10)).toBe('Invalid Input')
    expect(waitingTime("[6,2]", 9)).toBe('Invalid Input')
    expect(waitingTime([7, 8, 3, 4, 5], "9")).toBe('Invalid Input')
  })
})
