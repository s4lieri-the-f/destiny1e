export default class D1ItemSheet extends ItemSheet {
    get template() {
        return `systems/destiny1e/templates/items/${this.item.type}-sheet.hbs`
    }

    getData() {
        const system = super.getData();

        system.config = CONFIG.d1e;

        return system;
    }
}