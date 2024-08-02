Hooks.on('renderActorSheet', (app, html, data) => {
    const pathfinderLogo = html.find('img[src="systems/pf2e/assets/pathfinder_logo.webp"]');
    const starfinderLogo = "modules/SF2e-logo-instead-of-PF2e/starfinder_logo.webp";
  
    if (pathfinderLogo.length) {
      pathfinderLogo.attr('src', starfinderLogo);
    }
  });
  