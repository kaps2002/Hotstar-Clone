let movies =[
    {
        name:"Falcon and the winter Soldier",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, qui aliquid. Ullam praesentium veniam voluptas.",
        image: "/styles/images/slider 2.PNG"
    },
    {
        name:"Loki",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, qui aliquid. Ullam praesentium veniam voluptas.",
        image: "/styles/images/slider 1.PNG"
    },
    {
        name:"Wanda Vision",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, qui aliquid. Ullam praesentium veniam voluptas.",
        image: "/styles/images/slider 3.PNG"
    },
    {
        name:"Raya and the last dragon",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, qui aliquid. Ullam praesentium veniam voluptas.",
        image: "/styles/images/slider 4.PNG"
    },
    {
        name:"Luca",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, qui aliquid. Ullam praesentium veniam voluptas.",
        image: "/styles/images/slider 5.PNG"
    },
]
const caraousel=document.querySelector('.caraousel');
let sliders=[];
let slideindex=0; //track the current  slide
const createslide =()=> {
    if (slideindex >= movies.length) {
        slideindex = 0;
    }
    //create dom element
    let slide = document.createElement('div');
    var imgelement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgelement);
    caraousel.appendChild(slide);

    //setting up images
    imgelement.src = movies[slideindex].image;
    slideindex++

    //setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movies-des';
    sliders.push(slide);

    if (slide.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% -${30 * (sliders.length - 2)}px)`;
    }
};
for(let i=0; i<3; i++){
    createslide();
}
setInterval(()=>{
    createslide();
},3000);


