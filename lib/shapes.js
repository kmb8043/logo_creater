class shape {
    constructor(color){
        this.color = color;
    }

    setcolor(colorEl){
        this.color = colorEl;
    }
    getcolor(){
        return this.color;
    }
}

// triangle shape //

class triangle extends shape{
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// square shape //

class square extends shape{
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// circle //
class circle extends shape{
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

module.exports = {triangle , square , circle}