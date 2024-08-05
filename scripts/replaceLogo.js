Hooks.on('init', async function() {
  game.settings.register('custom-logo-instead-of-pf2e-logo', 'replacment-image', {
    name: 'Replacement Image',
    hint: 'Please select a file you would like to replace the Pathfinder Logo with.',
    scope: 'world',
    config: true,
    onChange: value => {
      console.log(value)
    },
    requiresReload: true,
    filePicker: "image"
  });
});

Hooks.on('renderActorSheet', (app, html, data) => {
    const pathfinderLogo = html.find('img[src="systems/pf2e/assets/pathfinder_logo.webp"]');
    const replacmentLogo = game.settings.get('custom-logo-instead-of-pf2e-logo', 'replacment-image');
  
    if (pathfinderLogo.length) {
      pathfinderLogo.attr('src', replacmentLogo);
    }
  });
  