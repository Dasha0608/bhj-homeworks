const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();
        let tooltipText = this.getAttribute('title');
        let tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;

        tooltip.style.left = this.getBoundingClientRect().left + 'px';
        tooltip.style.top = this.getBoundingClientRect().bottom + 'px';
    })
})
