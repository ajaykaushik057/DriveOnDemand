import mongoose, {Schema} from "mongoose";

const carSchema = new Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    nameOnRC:{
        type:String,
        required:true,
        trim:true
    },

    brand: {
      type: String,
      required: true,
      trim: true
    },
    model: {
      type: String,
      required: true,
      trim: true
    },
    year: {
      type: Number,
      required: true
    },
    NoPlate: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    available: {
        type: Boolean,
        default: true
      },
      
    pricePerDay: {
      type: Number,
      required: true
    },
    seats: {
      type: Number,
      required: true
    },
    fuelType: {
      type: String,
      enum: ['Petrol', 'Diesel', 'Electric'],
      required: true
    },
    transmission: {
      type: String,
      enum: ['Manual', 'Automatic'],
      required: true
    },
    images: {
        type: [String], // Array of image URLs or paths
        validate: [arrayLimit, '{PATH} exceeds the limit of 3']
      },
      unavailableDates: [{
        from: {
          type: Date,
          required: true
        },
        to: {
          type: Date,
          required: true
        }
      }],
    
  }, { timestamps: true });


  function arrayLimit(val) {
    return val.length <= 3;
  }

  export const Car = mongoose.model("Car", carSchema);