const butInstall = document.getElementById('buttonInstall');

butInstall.addEventListener('click', async () => {
    console.log("Hello World!");
  });

// Logic for installing the PWA
// TO DO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('beforeinstallprompt event triggered');
    butInstall.style.visibility = "visible";

    // TO DO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', async () => {
        console.log('Install button clicked');
        event.prompt();
        butInstall.setAttribute("disabled", true);
        butInstall.textContent = "Installed";
    });
});



// TO DO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
    console.log("App installed successfully", event);
});
