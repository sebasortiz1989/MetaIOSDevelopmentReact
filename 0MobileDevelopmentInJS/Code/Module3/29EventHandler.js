const target = document.querySelector('body');

function handleClick() {
    console.log('Clicked the body');
}

target.addEventListener('click', handleClick);

function handleClick2() {
    console.log('Clicked the heading');
}