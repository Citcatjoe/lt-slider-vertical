jQuery(document).ready(function ($) {

    

    mainTl = new TimelineMax(),
    $scene = $('svg.gyres'),
    $sceneFond = $scene.find('#scene-fond'),
    $sceneLand = $scene.find("#scene-land"),
    $sceneEquateur = $scene.find('#scene-equateur'),
    $sceneFond = $scene.find('#scene-fond'),
    $sceneFlecheZoom1 = $scene.find('#fleche-zoom-1_1_'),
    $sceneFlecheZoom2 = $scene.find('#fleche-zoom-2'),
    $sceneFlecheZoom3 = $scene.find('#fleche-zoom-3'),
    $sceneFlecheZoom4 = $scene.find('#fleche-zoom-4'),
    $sceneFlecheZoom5 = $scene.find('#fleche-zoom-5'),
    $sceneGyre1 = $scene.find('#gyre1'),
    $sceneGyre2 = $scene.find('#gyre2'),
    $sceneGyre3 = $scene.find('#gyre3'),
    $sceneGyre4 = $scene.find('#gyre4'),
    $sceneGyre5 = $scene.find('#gyre5'),
    $sceneBullet = $('.scene-bullet'),
    $sceneTitle = $('.scene-title'),
    $sceneText = $('.scene-text');
       

    clearStage();
    function clearStage() {
        var clearTl = new TimelineMax();

        clearTl
            .set($sceneFond, { autoAlpha: 1, transformOrigin: "center center" })
            .set($sceneLand, { autoAlpha: 1, transformOrigin: "center center" })
            .set($sceneEquateur, { autoAlpha: 1, transformOrigin: "center center" })
            .set($sceneFlecheZoom1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFlecheZoom2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFlecheZoom3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFlecheZoom4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFlecheZoom5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre5, { autoAlpha: 0, transformOrigin: "center center" });

        return clearTl;
    }

    // init controller
    var controller = new ScrollMagic.Controller();
    var step = 500;
    title0 = "Dans les tourbillons de plastique";
    text0 = "Des continents de plastique à la surface des océans? Une vue de l'esprit! Cette métaphore a été popularisée après l'alerte lancée en 1997 par le navigateur Charles Moore, effrayé par la pollution. Une chose est vraie cependant: cinq grandes zones océaniques possèdent une concentration plus élevée en morceaux de plastique.";
    title1 = "Alizés et Coriolis sont dans un bateau";
    text1 = "A l'équateur, les eaux océaniques de surface se déplacent toujours vers l'ouest sous l'effet de divers facteurs dont la force de Coriolis, générée par la rotation de la Terre, et les alizés qui soufflent en permanence.";
    title2 = "Courants continus";
    text2 = "Une partie de l'eau s'engouffre dans le golfe du Mexique, le surplus ainsi créé file alors vers le nord. Gulf Stream, courant du Labrador, dérive nord-atlantique... tous ces courants fusionnent et effectuent une grande boucle jusqu'en Europe avant de redescendre vers l'équateur: retour à la case départ.";
    title3 = "Giratoire";
    text3 = "Au milieu de ces courants géostrophiques siège une zone de convergence, appelée gyre de l'Atlantique nord, où s'accumulent, depuis une cinquantaine d'années, des plastiques. Problème, avec des vents faibles et de hautes pressions atmosphériques, ces eaux de surface sont propices aux sargasses et à de nombreuses espèces animales venues se reproduire.";
    title4 = "Jules Verne l'avait prédit";
    text4 = "Quatre autres gyres existent dans les autres océans. Ils sont aussi formés par des courants. Leurs mécanismes sont complexes, mais Jules Verne les avait déjà esquissés dans «Vingt Mille Lieues sous les mers»: «Dans le phénomène qui nous occupe [...] la mer des Sargasses [c'est] le point central où viennent se réunir les corps flottants»";

    // hack to remove white space under footer
    var whiteSpaceRemoved = false;
    new ScrollMagic.Scene({
        triggerElement: "footer",
        triggerHook: 0.5,
        duration: 100
    })
        .on('enter', function (e) {
            if (whiteSpaceRemoved == false) {
                $('footer').nextAll('div').css('display', 'none');
                whiteSpaceRemoved = true;
            }
        })
        //.addIndicators()
        .offset(0) //tip top
        .addTo(controller);

    // build scene
    new ScrollMagic.Scene({
        triggerElement: 'section.scene-map',
        triggerHook: 0,
        duration: step * 18
    })
        .setPin('section.scene-map', { pushFollowers: true })
        .offset(0)
        //.addIndicators()
        .addTo(controller);

    //------------------------------------------------------------------------------------------------------------//
    //--EQUATEUR
    //------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneEquateur, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 1) //VOLONTAIRE
      .addTo(controller);

    //------------------------------------------------------------------------------------------------------------//
    //--ZOOM + TEXTE OUT + TEXT CHANGE
    //------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step*3
    })
        .setTween($sceneLand, { scale: 2.5, xPercent: 36, yPercent: 20, ease: Power0.easeNone })
        .offset(step * 2) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step * 3
    })
      .setTween([$sceneBullet, $sceneTitle, $sceneText], {
        autoAlpha: 0,
        ease: Power0.easeNone
      })
      .offset(step * 2) //tip top
      .on("start end", function(e) {
        if (e.type == "end") {
          if (e.target.controller().info("scrollDirection") === "REVERSE") {
            //mainTl.set($sceneTextBullet, { scale: 0 });
            $sceneBullet.text("");
            $sceneTitle.text(title0);
            $sceneText.text(text0);
          } else {
            //mainTl.set($sceneTextBullet, { scale: 0.5 });
            $sceneBullet.text("1");
            $sceneTitle.text(title1);
            $sceneText.text(text1);
          }
        }
      })
      .addTo(controller);

    //------------------------------------------------------------------------------------------------------------//
    //--FLECHES ZOOMED
    //------------------------------------------------------------------------------------------------------------//

    //STEP 1
    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step
    })
        .setTween($sceneFlecheZoom1, { autoAlpha: 1, ease: Power0.easeNone })
        .offset(step * 5) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step
    })
      .setTween([$sceneBullet, $sceneTitle, $sceneText], {
        autoAlpha: 1,
        ease: Power0.easeNone
      })
        .offset(step * 5) //tip top
        
      .addTo(controller);

    //STEP 2
    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneFlecheZoom2, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 6) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step/2
    })
    .setTween([$sceneBullet, $sceneTitle, $sceneText], {
        autoAlpha: 0,
        ease: Power0.easeNone
    })
    .offset(step * 6) //tip top
    .on("start end", function (e) {
        if (e.type == "end") {
            if (e.target.controller().info("scrollDirection") === "REVERSE") {
                $sceneBullet.text("1");
                $sceneTitle.text(title1);
                $sceneText.text(text1);
            } else {
                $sceneBullet.text("2");
                $sceneTitle.text(title2);
                $sceneText.text(text2);
            }
        }
    })
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step/2
    })
        .setTween([$sceneBullet, $sceneTitle, $sceneText], {
            autoAlpha: 1,
            ease: Power0.easeNone
        })
        .offset(step * 6.5) //tip top
        .addTo(controller);







    //STEP 3
    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneFlecheZoom3, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 7) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step / 2
    })
        .setTween([$sceneBullet, $sceneTitle, $sceneText], {
            autoAlpha: 0,
            ease: Power0.easeNone
        })
        .offset(step * 7) //tip top
        .on("start end", function (e) {
            if (e.type == "end") {
                if (e.target.controller().info("scrollDirection") === "REVERSE") {
                    $sceneBullet.text("2");
                    $sceneTitle.text(title2);
                    $sceneText.text(text2);
                } else {
                    $sceneBullet.text("3");
                    $sceneTitle.text(title3);
                    $sceneText.text(text3);
                }
            }
        })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step / 2
    })
        .setTween([$sceneBullet, $sceneTitle, $sceneText], {
            autoAlpha: 1,
            ease: Power0.easeNone
        })
        .offset(step * 7.5) //tip top
        .addTo(controller);




    //------------------------------------------------------------------------------------------------------------//
    //--DEZOOM
    //------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step
    })
        .setTween([$sceneFlecheZoom1, $sceneFlecheZoom2, $sceneFlecheZoom3, $sceneFlecheZoom4, $sceneFlecheZoom5], { autoAlpha: 0, ease: Power0.easeNone })
        .offset(step * 8) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step * 3
    })
        .setTween($sceneLand, { scale: 1, xPercent: 0, yPercent: 0, ease: Power0.easeNone })
        .offset(step * 9) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step * 3
    })
      .setTween([$sceneBullet, $sceneTitle, $sceneText], {
        autoAlpha: 0,
        ease: Power0.easeNone
      })
      .offset(step * 9) //tip top
        .on("start end", function (e) {
            if (e.type == "end") {
                if (e.target.controller().info("scrollDirection") === "REVERSE") {
                    $sceneBullet.text("3");
                    $sceneTitle.text(title3);
                    $sceneText.text(text3);
                } else {
                    $sceneBullet.text("");
                    $sceneTitle.text(title4);
                    $sceneText.text(text4);
                }
            }
        })
      .addTo(controller);








    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step 
    })
        .setTween($sceneGyre1, { autoAlpha: 1, ease: Power0.easeNone })
        .offset(step * 12) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step
    })
        .setTween($sceneEquateur, { autoAlpha: 1, ease: Power0.easeNone })
        .offset(step * 13) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step
    })
        .setTween([$sceneGyre2, $sceneGyre3, $sceneGyre4, $sceneGyre5], { autoAlpha: 1, ease: Power0.easeNone })
        .offset(step * 14) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step * 3
    })
        .setTween([$sceneBullet, $sceneTitle, $sceneText], {
            autoAlpha: 1,
            ease: Power0.easeNone
        })
        .offset(step * 14) //tip top
        .addTo(controller);
});