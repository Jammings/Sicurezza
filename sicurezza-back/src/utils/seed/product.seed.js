const mongoose = require('mongoose');
const db = require('../database/db');
const Product = require('../../api/products/product.model');

const initialProducts = [
    {
      name: 'Raspberry Pi',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-reichelt.de%2Fbilder%2Fweb%2Fxxl_ws%2FA300%2FRASP_PI_4_B_8GB_01.png&f=1&nofb=1Hermanas Wachowski',
      description: 'qwewqrffa',
      type: 'Tarjeta',
    },
    {
      name: 'Camara HD',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fasset.conrad.com%2Fmedia10%2Fisa%2F160267%2Fc1%2F-%2Ffr%2F002264546PI04%2Fimage.jpg&f=1&nofb=1',
      description: 'qwewqrffa',
      type: 'Camara',
    }
  ];
  mongoose
  .connect(db.DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(async()=>{
      const allProducts = await Product.find();
      if(allProducts.length){
          console.log('Eliminando colección de productos...');
          await Product.collection.drop();
      } else console.log('No hay movies en la base de datos... procediendo a añadir las Productos');
  })
  .catch(error=>console.log('Error al borrar la colleción de la base de datos', error))
  .then(async()=>{
      await Product.insertMany(initialProducts);
      console.log('Productos añadidos con éxito...');
  })
  .catch(error=> console.log('Error al añadir Productos a la base de datos', error))
  .finally(()=> mongoose.disconnect());