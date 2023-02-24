const AnimalSays = 
{
    dog () {
    return 'woof';
    },
    cat () {
    return 'meow';
    },
    lion () {
    return 'roar';
    },
    // ... other animals
    default () {
    return 'moo';
    }
   };

   console.log(AnimalSays.lion())