
for(let i = 0; i < 50; i++){
    let p = document.createElement("p");
    p.textContent = `This is a mede up paragraph ${i+1}. `;
    p.style.fontSize = `${i+1}pt`
    let ichild = document.body.children[i+2];
    document.body.insertBefore(p, ichild);

}
