function modifyIconColor() {
    const navIcon = document.getElementsByClassName('hor-nav-icons');
    const svgDoc = navIcon.contentDocument;
    
    if (svgDoc) {
        const svgElement = svgDoc.querySelector('svg');
        const fillColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();

        if (svgElement) {
            svgElement.querySelectorAll('*').forEach(el => {
                el.style.fill = fillColor;
            });
        }
    }
}

