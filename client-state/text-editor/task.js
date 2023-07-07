const editor = document.getElementById('editor');

editor.value = localStorage.getItem('text');

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value)
});

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('text');  
});
