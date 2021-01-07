export class Color {
    constructor(r, g, b, a) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    Add(c) {
        return new Color(this.r + c.r, this.g + c.g, this.b + c.b, this.a + c.a)
    }

    Sub(c) {
        return new Color(this.r - c.r, this.g - c.g, this.b - c.b, this.a - c.a)
    }

    Mul(f) {
        return new Color(this.r * f, this.g * f, this.b * f, this.a * f)
    }

    Modulate(c) {
        return new Color(this.r * c.r, this.g * c.g, this.b * c.b, this.a * c.a)
    }

    Stringfy() {
        return `rgba(${this.r * 255},${this.g * 255},${this.b * 255},${this.a})`
    }

    static Green() {
        return new Color(0, 1, 0, 1);
    }

    static Red() {
        return new Color(1, 0, 0, 1);
    }
    static Blue() {
        return new Color(0, 0, 1, 1);
    }
    static Cyan() {
        return new Color(0, 1, 1, 1);
    }
    static White() {
        return new Color(1, 1, 1, 1);
    }
    static Black() {
        return new Color(0, 0, 0, 1);
    }
}