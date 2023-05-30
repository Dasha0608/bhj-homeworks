const menuSubs = document.querySelectorAll('ul.menu.menu_sub');
const menuLinks = document.getElementsByClassName('menu__link');

const arr = Array.from(menuLinks);
for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = (event) => {
        const target = event.target.parentElement.querySelector('ul');
        if (target === null) {
            return;
        }
        if (target.className === 'menu menu_sub menu_active') {
            target.className = 'menu menu_sub';
            return false;
        }

        menuSubs.forEach((element) => {
            element.className = 'menu menu_sub';
        })
        
        target.className = 'menu menu_sub menu_active';
        return false
    }

}
