const mongoose = require('mongoose');
 const Schema   = mongoose.Schema;

 const droneSchema = new Schema({
 const DroneSchema = new Schema({

   name : String,
   propellers: Number,
   maxSpeed  : Number
 });
});

 const Drone = mongoose.model('Drone', droneSchema);
 const Drone = mongoose.model('Drone', DroneSchema);
 module.exports = Drone;



/*

 const mongoose = require('mongoose');
   const Schema   = mongoose.Schema;

  const droneSchema = new Schema({
  const DroneSchema = new Schema({

     name : String,
     propellers: Number,
    maxSpeed  : Number
    maxSpeed  : Number,
   });

  const Drone = mongoose.model('Drone', droneSchema);
  const Drone = mongoose.model('Drone', DroneSchema);

   module.exports = Drone;
   */
