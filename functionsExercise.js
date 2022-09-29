//Exercicio 1-----------------------------------------------------------------------------------
/*const transformGrade = function(nota){
    
    if(nota >= 90){
        return 'A'
    }
    else if(nota >= 80){
        return 'B'
    }
    else if(nota >= 70){
        return 'C'
    }
    else if(nota >= 60){
        return 'D'
    }
    else{
        return 'F'
    }    
}

let nota = 62

console.log(nota >= 90 ? 'A' : (nota >= 80 ? 'B' : (nota >= 70 ? 'C' : (nota >= 60 ? 'D' : 'F'))))

console.log(transformGrade(nota))*/

//Exercicio 2-----------------------------------------------------------------------------------

/*const getTotal = function(array) {

    let total = 0

    for(let value of array){
        total += value
    }

    return total    
}

function situation(family, getTotal){

    const receita = getTotal(family.receitas)
    const despesa = getTotal(family.despesas)

    const saldo = receita - despesa
    const status = saldo >= 0 ? 'positivo' : 'negativo'

    console.log(`Seu saldo é ${status} | R$ ${saldo.toFixed(2)}`)
    
}

let family = {
    receitas: [23, 45, 62],
    despesas: [32, 43, 29]
}

situation(family, getTotal)*/

//Exercicio 3-----------------------------------------------------------------------------------

/*function switchValue(value){

    if(value.includes('C')){

        let number = value.split('C')[0]

        number = number * 9 / 5 + 32 

        return `${value} = ${number.toFixed(2)}F`
    }
    else if(value.includes('F')) {

        let number = value.split('F')[0]

        number = (number - 32) * 5 / 9

        return `${value} = ${number.toFixed(2)}C`
    }
    else {
        throw new Error('Medida de valor não configurada')
    }
}

let value = '10c'

//console.log(value.split('F'))

try{
    console.log(switchValue(value.toUpperCase()))
}
catch(e){
    console.log(e.message)
}*/

//Exercicio 4-----------------------------------------------------------------------------------

/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//console.log(booksByCategory[0].books[0].author)

let books = 0
let authors = 0

console.log(`quantidade de categorias: ${booksByCategory.length}`)

for(let value of booksByCategory){
    console.log(`categoria: ${value.category}`)
    console.log(`livros: ${value.books.length}`)
}

console.log(`autores: ${countAuthors()}`)

let author = 'Augusto Cury'

console.log(`autor: ${author} 
livros: ${(countBooks(author)).join(", ")}`)

function countAuthors() {
    
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    return authors.length
}

function countBooks(author) {
    
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == author){
                books.push(book.title)
            }
        }
    }

    return books
}

