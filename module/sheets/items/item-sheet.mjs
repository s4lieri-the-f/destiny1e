export default class D1ItemSheet extends ItemSheet {
    get template() {
        return `systems/destiny1e/templates/items/${this.item.type}-sheet.hbs`
    }
}