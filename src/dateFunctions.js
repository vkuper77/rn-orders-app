export function dateHandler(value) {
  let date = new Date(value)
  return date
}

export function todayHandler() {
  let now = new Date().toLocaleDateString()
  let date = now.split('.').reverse().join('-')
  let today = new Date(date)
  return today
}

export function getDayHandler(date) {
  return date.getDate()
}

export function getWeekDayHandler(date) {
  let days = [
    'воскресенье.',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ]
  return days[date.getDay()]
}

export function getMonthHandler(date) {
  let days = [
    'Янв',
    'Фев',
    'Март',
    'Апр',
    'Май',
    'Июнь',
    'Июль',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ]
  return days[date.getMonth()]
}

export function daysHandler(one, two) {
  return (one - two) / (60 * 60 * 24 * 1000)
}
