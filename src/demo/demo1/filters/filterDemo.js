export default (value) => value.replace(/^\d+/g, (s) => s.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'))
