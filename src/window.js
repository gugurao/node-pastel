import { Color } from "./color.js";
export class Window {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('canvas')
        this.canvas.id = 'pastel'
        this.canvas.height = height
        this.canvas.width = width
        document.body.append(this.canvas)
    }

    run() {
        requestAnimationFrame(() => this._update())
    }
    _clear() {

    }
    _draw() {
        const ctx = this.canvas.getContext("2d")
        ctx.fillStyle = new Color(255, 0, 0, 0.2).Stringfy();
        ctx.fillRect(100, 100, 200, 200);
        ctx.fillStyle = new Color(0, 255, 0, 0.2).Stringfy();
        ctx.fillRect(150, 150, 200, 200);
        ctx.fillStyle = new Color(0, 0, 255, 0.2).Stringfy();
        ctx.fillRect(200, 50, 200, 200);
    }

    _update() {
        this._clear()
        this._draw()
    }
}