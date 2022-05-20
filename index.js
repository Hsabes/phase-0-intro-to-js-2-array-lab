const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(){
    return cats.push('Ralph');
}

function destructivelyPrependCat(){
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(){
    const newCats1 = [...cats, 'Broom'];
    return newCats1;
}

function prependCat(){
    const newCats2 = ['Arnold', ...cats,];
    return newCats2;
}

function removeLastCat(){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(1);
}