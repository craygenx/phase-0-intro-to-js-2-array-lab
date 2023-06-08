// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
  cats.push(name)
  return cats
}
function destructivelyPrependCat(name) {
  cats.unshift(name)
  return cats
}
function destructivelyRemoveFirstCat() {
  
  cats.shift()
  return cats
}
function destructivelyRemoveLastCat() {
 
  cats.pop()
  return cats
}
function appendCat(name) {
  const members = [...cats, name]
  return members
}
function prependCat(name) {
  const members = [name, ...cats]
  return members
}
function removeLastCat() {
  return cats.slice(0,-1)
}
function removeFirstCat() {
  
  return cats.slice(1)
}
