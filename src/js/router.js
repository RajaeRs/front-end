function navigateTo(path, event) {
    if (event) {
        event.preventDefault(); // Prevent the default link behavior
    }
    window.history.pushState({}, path, window.location.origin + path); // Change the URL
    handleRoute(); // Handle the new route
}

window.onpopstate = handleRoute;

function handleRoute() {
    const app = document.getElementById('app');
    const path = window.location.pathname;
    console.log(window.location.pathname);

    app.innerHTML = '';

    switch (path) {
        case '/profile':
            loadComponent('profile');
            break;
        case '/game':
            loadComponent('game');
            break;
        case '/friends':
            loadComponent('friends');
            break;
        case '/chat':
            loadComponent('chat');
            break;
        default:
            loadComponent('home');
    }
}

function loadComponent(componentName) {
    import(`./components/${componentName}.js`).then(module => {
        document.getElementById('app').appendChild(module.default());
    });
}
