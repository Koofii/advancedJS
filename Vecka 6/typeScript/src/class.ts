interface Descriptor {
    getDescription():string
}

class Point implements Descriptor{
    getDescription():string{
        return `Point is at (${this.x}, ${this.y}) from origin (0,0)`
    }

    constructor(
        private _x: number, 
        private _y: number,
        private _name?: string
    ){}

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get name(){
        return this._name || 'No name given for this point'
    }

    distanceTo(point: Point){
        const a = point.x - this.x;
        const b = point.y - this.y;

        return Math.sqrt((a **2) + (b ** 2));
    }
};

const showDescription = (value: Descriptor) => {
    console.log(value.getDescription());
}

export default () => {
    const p1 = new Point(1, 1, 'foo');
    const p2 = new Point(3, 3)
    console.log(p1.distanceTo(p2));
    
    console.log(showDescription(p1));
    console.log(showDescription(p2));
};