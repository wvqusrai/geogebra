var ggbApp = new GGBApplet({
    "id": "app3d",
    "appName": "classical",
    "width": 800,
    "height": 600,
    "showMenuBar": true,
    "showToolBar": true,
    "showAlgebraInput": true,
    "borderColor": null,
    "showResetIcon": true,
    "showFullscreenButton": true,
}, true);
window.addEventListener("load", function() {
    ggbApp.setHTML5Codebase('D:/geogebra-math-apps-bundle-5-0-550-0/GeoGebra/HTML5/5.0/web3d/');
    ggbApp.inject('ggb');
});

$(document).ready(function() {
    $("#view").click(function() {
        app3d.evalCommand('SetPerspective("T")');
        // SetPerspective("G") makes only the Menu view graphics.svg Graphics View visible
        // SetPerspective("AGS") makes Menu view algebra.svg Algebra, Menu view graphics.svg Graphics and Menu view spreadsheet.svg Spreadsheet View visible, aligned horizontally
        // SetPerspective("S/G") makes Menu view spreadsheet.svg Spreadsheet and Menu view graphics.svg Graphics View visible with Spreadsheet on top and Graphics View below
        // SetPerspective("S/(GA)") is similar as above, the bottom part of the screen consists of Menu view graphics.svg Graphics View on the left and Menu view algebra.svg Algebra View on the right
        // SetPerspective("+D") adds Graphics View 2 to the currently displayed ones, on the right
        // SetPerspective("-D") removes Graphics View 2 from the currently displayed ones
    });
});


$(document).ready(function() {
    $("#view2").click(function() {
        app3d.evalCommand('SetPerspective("+A")');
    });
});