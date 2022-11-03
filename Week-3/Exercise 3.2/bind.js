// Bind method example

const bikes = {
    make: 'Royal Enfield',
    model: 'Classic',
    capacity: '350',
    printBikes: function () {
        console.log( this.make +` model : ` + this.model + ` CC: ` + this.capacity)
    }
}

let fn = bikes.printBikes; 
fn(); // undefined model : undefined CC: undefined

fn = bikes.printBikes.bind(bikes);
fn(); // Royal Enfield model : Classic CC: 350