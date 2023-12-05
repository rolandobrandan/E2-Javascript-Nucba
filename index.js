const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// ejercicio a

const pizzasIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);

console.log('Pizzas con id impar:');
pizzasIdImpar.forEach(pizza => {
  console.log(`ID: ${pizza.id}, Nombre: ${pizza.nombre}`);
});

// ejercicio b

const hayPizzaMenos600 = pizzas.some(pizza => pizza.precio < 600);

if (hayPizzaMenos600) {
  console.log('Si, hay una pizza que vale menos de 600');
} else {
  console.log('No hay ninguna pizza que valga menos de $600.');
}

// ejercicio c

console.log('Nombre de cada pizza con su respectivo precio:');
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}: $${pizza.precio}`);
});

//ejercicio d

console.log('Ingredientes de cada pizza:');
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`  - ${ingrediente}`);
  });
  console.log(); // Agregar una línea en blanco para separar las pizzas
});

