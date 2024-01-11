const { triangle , square , circle} = require('./shapes');

// test for triangle//
const triangle = new triangle ()
triangle.setColor('blue')
expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')

describe('setColor', () =>{
    it('set the color of shape', () => {
        const shape = new triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygen points= "150, 18 244, 182 56, 182" fill="blue"/>')
    })
})

// test for square //
const square = new square ()
square.setColor('blue')
expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />')

describe('setColor', () =>{
    it('set the color of shape', () => {
        const shape = new square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />')
    })
})

// test for circle //
const circle = new circle ()
circle.setColor('blue')
expect(circle.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />')

describe('setColor', () =>{
    it('set the color of shape', () => {
        const shape = new circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    })
})

 