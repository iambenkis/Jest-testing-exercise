// Task 4
function capitalize(string) { 
    return string.split("").map((s,i) => i===0?s = s.toUpperCase():s).join('')
}
module.exports = capitalize;