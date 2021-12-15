const pressed = [];
const codeSecret = 'konamicode';



//la fonction ici permet que lorsque l'on presse une touche fleché elle sera prise en compte comme on peut le voir avec un console log 

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    //ici on sépare la variable codeSecret pour que lorsque l'on tape sur le clavier la string de la variable elle déclenche cornify add
    pressed.splice(-codeSecret.length -1, pressed.length - codeSecret.length);

    if(pressed.join('').includes(codeSecret)){
        console.log('snake snake SNAKE !!!');
        cornify_add();
    }
    console.log(pressed);
    
}); 