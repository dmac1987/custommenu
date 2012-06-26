/*
 * TiCustomMenu
 *
 * controller.js
 * =============
 *
 * This commonJS module controls the whole application. All windows are opened and closed here,
 * all background setting and application level event listeners are also controlled here.
 *
 * It uses a custom back navigation which is coded to for both Android and IOS and as you will
 * seen in the screens the android hard back button is handled.
 *
 * It also uses a custom open and close function which only closes the previous window after
 * the new window has opened.
 *
 * There is only one window open at a time in this application and each time the window memory
 * is cleaned up.
 *
 * As you will see through the modules I have tried to use best practices and conform to a coding
 * standard of layout, comments and sections in each module. This again is only a suggested
 * way of doing this but it works and works well for me.
 *
 *
 * ===================================================================
 * Date created :                   1st July 2012
 *
 * Developer :                      Trevor Ward
 *
 * Modification Log :
 * ==================
 *
 * Date :                  Developer:              Details:
 *
 * 1st July 2012           Trevor Ward             Initial code
 *
 * ===================================================================
 */

/*
 * A couple of parameters to keep the details of the current opened and previous
 * windows for opening and closing
 */
var currWindow    =    null;
var lastWindow    =    null;

/*
 * windowHandler
 * =============
 *
 * This function opens the new window and closes the previous one
 */

function windowHandler(inParam) {"use strict";
    lastWindow    =    currWindow;

    currWindow    =    inParam.newWindow;

    currWindow.open();

    if (lastWindow) {
        lastWindow.close();
    }

    lastWindow    =    null;

    return;
}

/*
 * loadWindowOne
 * =============
 *
 * This function will load the first screen of the menu
 */

function loadWindowOne(inParam) {"use strict";
    var windowOneReq    =    require('/ui/windows/windowOne');

    windowHandler({
        newWindow :    windowOneReq.loadWindowOneDisplay()
    });

    return;
}

/*
 * loadWindowTwo
 * =============
 *
 * This function will load the second screen of the menu
 */

function loadWindowTwo(inParam) {"use strict";
    var windowTwoReq    =    require('/ui/windows/windowTwo');

    windowHandler({
        newWindow :    windowTwoReq.loadWindowTwoDisplay()
    });

    return;
}

/*
 * loadWindowThree
 * ===============
 *
 * This function will load the third screen of the menu
 */

function loadWindowThree(inParam) {"use strict";
    var windowThreeReq    =    require('/ui/windows/windowThree');

    windowHandler({
        newWindow :    windowThreeReq.loadWindowThreeDisplay()
    });

    return;
}

/*
 * loadWindowFour
 * =============+
 *
 * This function will load the fourth screen of the menu
 */

function loadWindowFour(inParam) {"use strict";
    var windowFourReq    =    require('/ui/windows/windowFour');

    windowHandler({
        newWindow :    windowFourReq.loadWindowFourDisplay()
    });

    return;
}

/*
 * loadWindowFive
 * ==============
 *
 * This function will load the fifth screen of the menu
 */

function loadWindowFive(inParam) {"use strict";
    var windowFiveReq    =    require('/ui/windows/windowFive');

    windowHandler({
        newWindow :    windowFiveReq.loadWindowFiveDisplay()
    });

    return;
}

/*
 * startApp
 * ========
 *
 * This function is called from the app.js bootstrap file initially. It is the only function
 * called from there, and it is the only function exported from the control file.
 *
 * This keeps the global scope managed cleanly through out the app.
 */
function startApp(inParam) {"use strict";
    loadWindowOne();

    return;
}

/* 
 * Application control section. 
 * 
 * This section handles the application event listener which receives fire
 * events from the application itself (In this case the menu), and processes
 * the application flow.
 */

function applicationHandler(inParam)
{
    switch(inParam.TYPE)
    {
        case 'opt1':
             loadWindowOne(inParam.PARAMS);
             break;
        case 'opt2':
             loadWindowTwo(inParam.PARAMS);
             break;
        case 'opt3':
             loadWindowThree(inParam.PARAMS);
             break;
        case 'opt4':
             loadWindowFour(inParam.PARAMS);
             break;
        case 'opt5':
             loadWindowFive(inParam.PARAMS);
             break;
        default:
             break;
    }
}
/*
 * EXPORTS SECTION
 */

exports.startApp    =    startApp;

/*
 * END OF FILE
 */
