const integer = (node: any) => {
  return Number.isInteger(node.value);
}
// override default rule behaviors for your custom rule
integer.blocking = false
integer.skipEmpty = false
integer.debounce = 20 // milliseconds
integer.force = true

export {
  integer,
};