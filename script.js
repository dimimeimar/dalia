document.getElementById("colorBtn").addEventListener('click' , () => {
    let container = document.getElementById("container");
    let children = container.children;
    console.log(children);
    for (let i = 0 ; i < children.length ; i++) {
        let color = `rgb(${myRand()} ,${myRand()} , ${myRand()} )`;
        children[i].style.backgroundColor = color;
    }
});


function myRand() {
    return Math.floor(Math.random()*255);
}
