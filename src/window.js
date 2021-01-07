export class Window {

    constructor(width, height) {
        this.canvas = document.createElement('canvas')
        this.canvas.id = 'pastel'
        this.canvas.height = height
        this.canvas.width = width
        document.body.append(this.canvas)
    }

    run() {
        requestAnimationFrame(() => this.update())
    }
    clear() {

    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
        ctx.fillRect(100, 100, 200, 200);
        ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
        ctx.fillRect(150, 150, 200, 200);
        ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
        ctx.fillRect(200, 50, 200, 200);
    }
    update() {
        this.clear()
        this.draw()
    }
}