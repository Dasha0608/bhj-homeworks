const interestCheckboxes = document.querySelectorAll('.interest__check');

interestCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        let parentCheckbox = checkbox.closest('.interest');
        let childCheckbox = parentCheckbox.querySelectorAll('.interest__check');
        childCheckbox.forEach((child) => {
            child.checked = checkbox.checked;
        })
    })
})
