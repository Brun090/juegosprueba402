gdjs.menuprincipalCode = {};
gdjs.menuprincipalCode.localVariables = [];
gdjs.menuprincipalCode.idToCallbackMap = new Map();
gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1= [];
gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects2= [];
gdjs.menuprincipalCode.GDpjObjects1= [];
gdjs.menuprincipalCode.GDpjObjects2= [];
gdjs.menuprincipalCode.GDtrigger_9595abajoObjects1= [];
gdjs.menuprincipalCode.GDtrigger_9595abajoObjects2= [];
gdjs.menuprincipalCode.GDtrigger_9595arribaObjects1= [];
gdjs.menuprincipalCode.GDtrigger_9595arribaObjects2= [];
gdjs.menuprincipalCode.GDtrigger_9595derechaObjects1= [];
gdjs.menuprincipalCode.GDtrigger_9595derechaObjects2= [];
gdjs.menuprincipalCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.menuprincipalCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.menuprincipalCode.GDCoin_9595GoldObjects1= [];
gdjs.menuprincipalCode.GDCoin_9595GoldObjects2= [];
gdjs.menuprincipalCode.GDBushlyObjects1= [];
gdjs.menuprincipalCode.GDBushlyObjects2= [];
gdjs.menuprincipalCode.GDGrizzlyObjects1= [];
gdjs.menuprincipalCode.GDGrizzlyObjects2= [];
gdjs.menuprincipalCode.GDAxeObjects1= [];
gdjs.menuprincipalCode.GDAxeObjects2= [];
gdjs.menuprincipalCode.GDKnightObjects1= [];
gdjs.menuprincipalCode.GDKnightObjects2= [];


gdjs.menuprincipalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame"), gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1.length;i<l;++i) {
    if ( gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1[k] = gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1[i];
        ++k;
    }
}
gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena1", true);
}
}

}


};

gdjs.menuprincipalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.menuprincipalCode.GDpjObjects1.length = 0;
gdjs.menuprincipalCode.GDpjObjects2.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.menuprincipalCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.menuprincipalCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.menuprincipalCode.GDBushlyObjects1.length = 0;
gdjs.menuprincipalCode.GDBushlyObjects2.length = 0;
gdjs.menuprincipalCode.GDGrizzlyObjects1.length = 0;
gdjs.menuprincipalCode.GDGrizzlyObjects2.length = 0;
gdjs.menuprincipalCode.GDAxeObjects1.length = 0;
gdjs.menuprincipalCode.GDAxeObjects2.length = 0;
gdjs.menuprincipalCode.GDKnightObjects1.length = 0;
gdjs.menuprincipalCode.GDKnightObjects2.length = 0;

gdjs.menuprincipalCode.eventsList0(runtimeScene);
gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.menuprincipalCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.menuprincipalCode.GDpjObjects1.length = 0;
gdjs.menuprincipalCode.GDpjObjects2.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.menuprincipalCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.menuprincipalCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.menuprincipalCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.menuprincipalCode.GDBushlyObjects1.length = 0;
gdjs.menuprincipalCode.GDBushlyObjects2.length = 0;
gdjs.menuprincipalCode.GDGrizzlyObjects1.length = 0;
gdjs.menuprincipalCode.GDGrizzlyObjects2.length = 0;
gdjs.menuprincipalCode.GDAxeObjects1.length = 0;
gdjs.menuprincipalCode.GDAxeObjects2.length = 0;
gdjs.menuprincipalCode.GDKnightObjects1.length = 0;
gdjs.menuprincipalCode.GDKnightObjects2.length = 0;


return;

}

gdjs['menuprincipalCode'] = gdjs.menuprincipalCode;
