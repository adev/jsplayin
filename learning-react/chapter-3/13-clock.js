// Now that we’ve been introduced to the core concepts of functional programming,
// let’s put those concepts to work for us and build a small JavaScript application.
//
//  Following these three simple rules will help you stay on target.
//
//  1. Keep data immutable.
//  2. Keep functions pure — accept at least one argument, return data or another function.
//  3. Use recursion over looping (wherever possible).
//
//  Our challenge is to build a ticking clock.
//
//  The clock needs to display hours, minutes, seconds and time of day in civilian
//  time. Each field must always have double digits, meaning leading zeros need to
//  be applied to single digit values like 1 or 2. The clock must also tick and
//  change the display every second.

// In functional programs, we should use functions over values wherever possible.
// We will invoke the function to obtain the value when needed.


const oneSecond = () => 1000
const currentTime = () => new Date()

const serializeClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
})

const civilianHours = clockTime => ({
  ...clockTime
  , hours: (clockTime.hours > 12)
    ? clockTime.hours - 12
    : clockTime.hours
  , ampm: (clockTime.hours >= 12) ? 'PM' : 'AM'
})

const format = formatStr =>
  time =>
    formatStr
      .replace('hh', (time.hours < 10) ? '0' + time.hours : time.hours)
      .replace('mm', (time.minutes < 10) ? '0' + time.minutes : time.minutes)
      .replace('ss', (time.seconds < 10) ? '0' + time.seconds : time.seconds)
      .replace('tt', time.ampm)

const tick = () =>
  format('hh:mm:ss tt')(
    civilianHours(
      serializeClockTime(
        currentTime()
      )
    )
  )

const updateDisplay = ( newtime ) => {
  console.clear()
  console.log( newtime() )
}

const start = () => setInterval(
  () => updateDisplay(tick), 1000
)

module.exports = {
  oneSecond, currentTime, serializeClockTime, civilianHours, format, tick, start
}
