import D1ItemSheet from "./module/sheets/items/item-sheet.mjs";
import { RangedWeaponDataModel } from "./module/data-models.mjs";
import { d1e } from "./module/config.mjs";

Hooks.once("init", function(){
    console.log("Destiny GS 1e | Initialization of Destiny system 1e");


    CONFIG.d1e = d1e;
    CONFIG.Item.dataModels = {
        Weapon: RangedWeaponDataModel
    };

    Items.unregisterSheet("core", ItemSheet);
    console.log("Destiny GS 1e | Unregistered Default ItemSheet");
    Items.registerSheet("d1e", D1ItemSheet, { makeDefault: true} );
    console.log("Destiny GS 1e | Registered Default D1ItemSheet template");
});