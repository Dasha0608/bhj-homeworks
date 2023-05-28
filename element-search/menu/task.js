const menuSubs = document.querySelectorAll('.menu_sub');
const menuLinks = document.getElementsByClassName('menu__link');

const arr = Array.from(menuLinks);
for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = (event) => {
        if (event.target.parentElement.querySelector('ul') === null) {
            return;
        }
        if (event.target.parentElement.querySelector('ul').className === 'menu menu_sub menu_active') {
            event.target.parentElement.querySelector('ul').className = 'menu menu_sub';
            return false;
        }

        menuSubs.forEach((element) => {
            element.className = 'menu menu_sub';
        })
        
        event.target.parentElement.querySelector('ul').className = 'menu menu_sub menu_active';
        return false
    }

}
