const sum = function(number1, number2){
    let total = number1 + number2;
    return total
}

let a = 2
let b = 4

console.log(`${a} + ${b} = ${sum(a, b)}`)

const sayMyName = () => {
    console.log('carlos')
}

sayMyName();

function sayMyName2(name) {
    console.log('antes do callback')
    name()
    console.log('depois do callback')
}

const insideCallback = function() {
    console.log('teste callback')
}

sayMyName2(insideCallback)

sayMyName2(
    () => {
        console.log('teste callback 2')
    }
)

//----------------------------------

function Person(name, age, weight){
    this.name = name
    this.age = age
    this.weight = weight
    this.walk = function(){
        return `${this.name} is walking`
    }
}

const carlos = new Person('carlos', '19', 65)
const josh = new Person('josh', '21', 70)

console.log(carlos.walk())
console.log(josh.walk())

console.log('carlos'.length)

//---------------------------------

let phrase = 'i wanna be yours'
console.log(phrase.includes('bee'))


console.log([
    "a",
    {type: 'array'},
    function() { return 'alo' }
][2]())

//---------------------------------

let techs = ['html', 'css', 'js']

techs.push('teste')
techs.unshift('sql')
//techs.pop()
//techs.shift()

console.log(techs.indexOf('css'))

console.log(techs.slice(1, 3))
techs.splice(1, 1)

console.log(techs)