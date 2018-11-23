import isEmpty from 'validator/lib/isEmpty'

export function validateForm(obj) {
    const isFieldEmpty =
      isEmpty(obj.id) ||
      isEmpty(obj.name) ||
      isEmpty(obj.city) ||
      isEmpty(obj.country) ||
      isEmpty(obj.IATA3) ||
      isEmpty(obj.IATA4) ||
      isEmpty(obj.latitute) ||
      isEmpty(obj.longitude)
    if (isFieldEmpty) return 'All fields must be completed'

    return false
}