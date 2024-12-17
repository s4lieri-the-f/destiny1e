// definitions

const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;


// data models


class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      resources: new SchemaField({
        health: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 200 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 200 })
        }),
        light: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 1900 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 1900 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 2100 })
        })
      })
    };
  }
}

class ImportantActorDataModel extends ActorDataModel {
  static defineSchema() {
    // Only important Actors have a background
    return {
      ...super.defineSchema(),
      background: new SchemaField({
        biography: new HTMLField({ required: true, blank: true })
      })
    };
  }
}

export class GuardianDataModel extends ImportantActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      goodness: new SchemaField({
        value: new NumberField({ required: true, integer: true, min: 0, initial: 5 }),
        max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
      }),
      level: new NumberField({ required: true, integer: true, min: 0, initial: 0, max: 30 })
    };
  }
}

export class EnemyDataModel extends ImportantActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      fraction: new StringField({})
    };
  }
}

// The pawn does not have any different data to the base ActorDataModel, but we
// still define a data model for it, in case we have any special logic we want
// to perform only for pawns.
export class PawnDataModel extends ActorDataModel {}

/* -------------------------------------------- */
/*  Item Models                                 */
/* -------------------------------------------- */

class ItemDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            name: new StringField({blank: false}),
            rarity: new StringField({
                required: true,
                blank: false,
                options: ["common", "uncommon", "rare", "legendary", "exotic"],
                initial: "common"
            }),
            price: new NumberField({ required: true, integer: true, min: 0, initial: 500 }),
            slot: new StringField({
                required: true,
                blank: false,
                options: ["kinetic", "energy", "heavy", "head", "chest", "legs", "arms", "class", "inventory"],
                initial: "inventory"
            })
        };
    }
}

export class ArmorDataModel extends ItemDataModel {
    static defineSchema() {
        return{
            ...super.defineSchema(),
            light: new SchemaField({
                min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                value: new NumberField({ required: true, integer: true, min: 0, initial: 1900 }),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 2100 })
            }),
            resilence: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            discipline: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            intellect: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            strengh: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            mobility: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            recovery: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
        }
    }
}

export class HelmetDataModel extends ArmorDataModel {
    static defineSchema(){
        return{
            ...super.defineSchema()
        }
    }
}

export class ChestArmorDataModel extends ArmorDataModel {
    static defineSchema(){
        return{
            ...super.defineSchema()
        }
    }
}

export class GauntletsDataModel extends ArmorDataModel {
    static defineSchema(){
        return{
            ...super.defineSchema()
        }
    }
}

export class LegArmorDataModel extends ArmorDataModel {
    static defineSchema(){
        return{
            ...super.defineSchema()
        }
    }
}

export class ClassArmorDataModel extends ArmorDataModel {
    static defineSchema(){
        return{
            ...super.defineSchema()
        }
    }
}

export class RangedWeaponDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            ammo: new StringField({
                required: true,
                blank: false,
                options: ["kinetic", "energy", "heavy"],
                initial: "kinetic"
            }),
            light: new SchemaField({
                min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                value: new NumberField({ required: true, integer: true, min: 0, initial: 1900 }),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 2100 })
            }),
            range: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            handling: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            aim: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            recoil: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            rpm: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            magazine: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            size: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            zoom: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            airborne: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 })
            };
    }
}

export class MeleeWeaponDataModel extends ItemDataModel {
    static defineSchema () {
        return {
            ...super.defineSchema(),
            light: new SchemaField({
                min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                value: new NumberField({ required: true, integer: true, min: 0, initial: 1900 }),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 2100 })
            }),
            impact: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            speed: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            recovery: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            shield: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            shieldrecovery: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            magazine: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            reload: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 })
        }
    }
}

export class GlaiveDataModel extends RangedWeaponDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            impact: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 })
        }
    }
}

export class GunDataModel extends RangedWeaponDataModel{
    static defineSchema(){
        return {
            ...super.defineSchema(),
            stability: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            impact: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 })
        }
    }
}

export class RockedLauncherDataModel extends GunDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            blowradius: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
            reload: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 }),
        }
    }
}

export class LinearRifleDataModel extends GunDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            chargetime: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 })
        }
    }
}

export class BowRifleDataModel extends GunDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            shootingspeed: new NumberField({ required: true, integer: true, positive: true, max: 200, initial: 5 })
        }
    }
}




export class SpellDataModel extends ItemDataModel {
  static defineSchema() {
    return {
        ...super.defineSchema(),
        cost: new NumberField({ required: true, integer: true, positive: true, initial: 2 })
    };
  }
}