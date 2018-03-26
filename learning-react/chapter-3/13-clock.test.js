const clock = require('./13-clock')

describe('learning-react clock', () => {
  test('oneSecond', () => {
    expect(clock.oneSecond()).toBe(1000)
  })

  test('currentTime', () => {
    expect(clock.currentTime()).toBeInstanceOf(Date)
  })

  let clockTime = clock.serializeClockTime(new Date('August 19, 1975 23:15:30'))
  let clockTime2 = clock.serializeClockTime(new Date('August 19, 1975 13:05:04'))

  test('serializeClockTime', () => {
    expect(clockTime.hours).toBe(23)
    expect(clockTime.minutes).toBe(15)
    expect(clockTime.seconds).toBe(30)
    expect(clockTime2.hours).toBe(13)
    expect(clockTime2.minutes).toBe(5)
    expect(clockTime2.seconds).toBe(4)
  })

  let civvy = clock.civilianHours(clockTime)
  let civvy2 = clock.civilianHours(clockTime2)

  test('civilianHours', () => {
    expect(civvy.hours).toBe(11)
    expect(civvy.ampm).toBe('PM')
    expect(civvy2.hours).toBe(1)
    expect(civvy2.minutes).toBe(5)
    expect(civvy2.seconds).toBe(4)
    expect(civvy2.ampm).toBe('PM')
  })

  let formatClock = clock.format('hh:mm:ss tt')
  let formattedClock = formatClock(civvy)
  let formattedClock2 = formatClock(civvy2)

  test('format Clock', () => {
    expect(formattedClock).toBe('11:15:30 PM')
    expect(formattedClock2).toBe('01:05:04 PM')
  })

})
