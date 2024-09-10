export function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 || income < expenses) return 'Invalid Input'

  return (income - expenses) * 0.2
}

/**
 *
 * @param {string} email
 */
export function sendNotification(email) {
  if (!email.includes('@')) return 'Invalid Email'

  const [userName, domain] = email.split('@')

  return `${userName} sent you an email from ${domain}`
}

export function checkDigitsInName(name) {
  if (typeof name !== 'string') return 'Invalid Input'

  for (let i = 0; i <= 9; i++) {
    if (name.includes(i)) return true
  }

  return false
}

/**
 *
 * @param {{ name: string, testScore: number,  schoolGrade: number, isFFamily : boolean  }} obj
 */
export function calculateFinalScore(obj) {
  const validObjStructure = [
    {
      propertyName: 'name',
      validateFn: (name) => typeof name === 'string',
      getScore: (_value) => 0,
    },
    {
      propertyName: 'testScore',
      validateFn: (testScore) =>
        typeof testScore === 'number' && testScore > 0 && testScore <= 50,
      getScore: (value) => value,
    },
    {
      propertyName: 'schoolGrade',
      validateFn: (schoolGrade) =>
        typeof schoolGrade === 'number' && schoolGrade > 0 && schoolGrade <= 30,
      getScore: (value) => value,
    },
    {
      propertyName: 'isFFamily',
      validateFn: (isFFamily) => typeof isFFamily === 'boolean',
      getScore: (value) => (value ? 20 : 0),
    },
  ]

  let totalMarks = 0

  for (const property of validObjStructure) {
    const { propertyName, validateFn, getScore } = property
    const value = obj[propertyName]

    if (!validateFn(value)) return 'Invalid Input'

    totalMarks += getScore(value)
  }

  return totalMarks >= 80
}

/**
 *
 * @param {number[]} waitingTimes
 * @param {number} serialNumber
 */
export function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    waitingTimes.length < 1 ||
    typeof serialNumber !== 'number'
  ) {
    return 'Invalid Input'
  }

  const lastIndex = waitingTimes.length - 1
  const averageTime = waitingTimes.reduce((prev, current, index) => {
    if (typeof current !== 'number') return 'Invalid Input'

    if (index === lastIndex) return Math.round((prev + current) / ++index)

    return prev + current
  }, 0)

  return (serialNumber - waitingTimes.length - 1) * averageTime
}
