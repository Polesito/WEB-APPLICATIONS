
function f(a, b, c, d) {
    console.log(`f(${a}, ${b}, ${c}, ${d})`);
}

f(1);                                           // When u call a funcion without all parameters, default -> undefined (will work)
f(1, 2, 3, 4, 5, 6);                            // When u call a funcion whit more parameters, default -> take only the ones u can asign (but it will work)