const { triangle , square , circle} = require('./shapes');

describe('triangle test' , () => {
    test('generate green triangle' , () => {
        const expectedTri =

        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

       <polygon points= "100, 15 200, 200 0, 200"fill="green" />

       <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

       </svg>;
        
         const shape = new triangle();
        shape.shapeColor('green');
        shape.textColor('white');
        expect(shape.render()).toEqual(expectedTri);
    })
})

describe('square test' , () => {
    test('generate red square' , () => {
        const expectedSqu = 
        
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="200"fill="red" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

        </svg>;

        const shape = new square();
        shape.shapeColor('red');
        shape.textColor('white');
        expect(shape.render()).toEqual(expectedSqu);
    })
})

describe('circle test' , () => {
    test('generate blue circle' , () => {
        const expectedCir = 
       
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="blue" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

        </svg>;

        const shape = new circle();
        shape.shapeColor('blue');
        shape.textColor('white');
        expect(shape.render()).toEqual(expectedCir);
    })
})

 