export default class Money {
    _rows = {
        active: [
            this._createActive('Frozen yoghurt', 159, 6.0),
            this._createActive('Ice cream sandwich', 237, 9.0),
            this._createActive('Eclair', 262, 16.0),
            this._createActive('Cupcake', 305, 3.7),
            this._createActive('Gingerbread', 356, 16.0),
        ],
    };
    _createActive(name, pcs, price) {
        return { name, pcs, price };
    }

    getActive = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(this._rows.active)
        }, 1000);
    })
}