gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.idToCallbackMap = new Map();
gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.gameoverCode.GDpjObjects1= [];
gdjs.gameoverCode.GDpjObjects2= [];
gdjs.gameoverCode.GDtrigger_9595abajoObjects1= [];
gdjs.gameoverCode.GDtrigger_9595abajoObjects2= [];
gdjs.gameoverCode.GDtrigger_9595arribaObjects1= [];
gdjs.gameoverCode.GDtrigger_9595arribaObjects2= [];
gdjs.gameoverCode.GDtrigger_9595derechaObjects1= [];
gdjs.gameoverCode.GDtrigger_9595derechaObjects2= [];
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.gameoverCode.GDCoin_9595GoldObjects1= [];
gdjs.gameoverCode.GDCoin_9595GoldObjects2= [];
gdjs.gameoverCode.GDBushlyObjects1= [];
gdjs.gameoverCode.GDBushlyObjects2= [];
gdjs.gameoverCode.GDGrizzlyObjects1= [];
gdjs.gameoverCode.GDGrizzlyObjects2= [];
gdjs.gameoverCode.GDAxeObjects1= [];
gdjs.gameoverCode.GDAxeObjects2= [];
gdjs.gameoverCode.GDKnightObjects1= [];
gdjs.gameoverCode.GDKnightObjects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menuprincipal", true);
}
}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.gameoverCode.GDpjObjects1.length = 0;
gdjs.gameoverCode.GDpjObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.gameoverCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.gameoverCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.gameoverCode.GDBushlyObjects1.length = 0;
gdjs.gameoverCode.GDBushlyObjects2.length = 0;
gdjs.gameoverCode.GDGrizzlyObjects1.length = 0;
gdjs.gameoverCode.GDGrizzlyObjects2.length = 0;
gdjs.gameoverCode.GDAxeObjects1.length = 0;
gdjs.gameoverCode.GDAxeObjects2.length = 0;
gdjs.gameoverCode.GDKnightObjects1.length = 0;
gdjs.gameoverCode.GDKnightObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.gameoverCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.gameoverCode.GDpjObjects1.length = 0;
gdjs.gameoverCode.GDpjObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.gameoverCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.gameoverCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.gameoverCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.gameoverCode.GDBushlyObjects1.length = 0;
gdjs.gameoverCode.GDBushlyObjects2.length = 0;
gdjs.gameoverCode.GDGrizzlyObjects1.length = 0;
gdjs.gameoverCode.GDGrizzlyObjects2.length = 0;
gdjs.gameoverCode.GDAxeObjects1.length = 0;
gdjs.gameoverCode.GDAxeObjects2.length = 0;
gdjs.gameoverCode.GDKnightObjects1.length = 0;
gdjs.gameoverCode.GDKnightObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
