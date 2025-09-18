<script setup>
import {reactive, ref, computed} from 'vue'
  const equipmentPrices = {
    tables: 10,
    chairs: 5,
    tents: 100,
    cocktail: 8,
  };

  const clothPrices = {
    tables: 2,
    cocktail: 2,
  };
let event = ref("");
let eventDate = ref("");

let orders = ref([]); 

let orderKey = 0;
const generateOrderKey = () => orderKey++;
const addEquipment = () => {
  let order = reactive({ equipment: "", quantity: 0, cloth: "no" ,key: generateOrderKey()})
  orders.value.push(order);
}
const removeEquipment = (key) => {
  console.log("Remove equipment is called. key:" + key);
  orders.value = orders.value.filter((order) => order.key !== key);
};
const canHaveCloth = (order)=>{
  return order.equipment === 'tables' || order.equipment === 'cocktail';
}
const mergedOrders = () => {
  // Se kreira unikaten kluc za sekoj vid naracka. Ako ima povekje naracki od ovoj vid, se sobiraat kolicinite.
  //Mapata ja drzi kolicinata za koj unikaten vid naracka.
  // {equipment:"table",quantity: 10, cloth: 'yes'}
  // {equipment:"table",quantity: 15, cloth: 'yes'}
  // Mapata pravi unikatna naracka: {equipment:"table",quantity: 25, cloth: 'yes'} i kaj nea e zapisana so kluc "tableyes"
  const map = new Map();

  for (const order of orders.value) {
    const key = canHaveCloth(order)? `${order.equipment}-${order.cloth}`: order.equipment;

    if (map.has(key)) {
      map.get(key).quantity += order.quantity;
    } else {
      // Clone item to avoid mutating original
      map.set(key, {
        equipment: order.equipment,
        quantity: order.quantity,
        cloth: order.cloth
      });
    }
  }

  return Array.from(map.values());
};
const showSummary = ref(false);
let reservation = {};
const makeReservation = () => {
  let orders = mergedOrders();
  reservation = {event: event, eventDate : eventDate, orders : orders};
  showSummary.value = true;
}
const resetForm = () => {
  event.value = '';
  eventDate.value = '';
  orders.value = [];
  showSummary.value = false;
};
const confirmReservation = () => {
  showSummary.value = false;
  console.log(reservation);
  reservation = {};
  resetForm();
};
const cancelReservation = () => {
  showSummary.value = false;
};


</script>
<template>
    <!-- Calculator Section -->
    <section id="calculator" class="bg-secondary py-5 text-center justify-content-center">
      <div v-if="!showSummary" class="container" style="width:57%;">
        <h2
            class="text-center mb-4"
            style="font-family: 'Dancing Script', cursive;font-size:2.8rem;color:#7ee7d3;"
          >
            Calculate your cost
          </h2>
        <div id="calculatorComponent" class="bg-light p-1 rounded">
          <div class="calculator bg-dark p-5 rounded-3 border border-turquoise">
            <h2
            class="text-center text-light mb-4"
            style="font-family: 'Dancing Script', cursive;font-size:2.6rem"
          >
            Estimate Your Event
          </h2>
  
            <select
              id="eventSelect"
              class="form-select mb-3 bg-dark text-light border-turquoise"
              v-model="event"
            >
              <option disabled value="">Select an event</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate Event</option>
            </select>
            <input
              type="date"
                v-model="eventDate"
                class="form-control mb-3 bg-dark text-light border-turquoise"
            />
            <div v-for="order in  orders" v-bind:key="order.key" id="equipmentContainer" class="equipment-set">

              <button type="button" class="remove-btn" v-on:click="removeEquipment(order.key)">
              <i class="fas fa-times"></i>
              </button>
              <!-- Equipment items will be added dynamically -->
              <select v-model="order.equipment"  class="form-select mb-2 equipmentSelect" >   
                <option disabled value="">Select equipment</option>
                <option value="tables">Tables ($10 each)</option>
                <option value="chairs">Chairs ($5 each)</option>
                <option value="tents">Tents ($100 each)</option>
                <option value="cocktail">Cocktail Table ($8 each)</option>
              </select>
            
              <select v-model="order.quantity" class="form-select mb-2 quantitySelect">
                <option disabled value=0>Select quantity</option>
                <option v-bind:value=10>10</option>
                <option v-bind:value=20>20</option>
                <option v-bind:value=50>50</option>
                <option v-bind:value=100>100</option>
              </select>
            
              <select v-if="order.equipment == 'tables' | order.equipment == 'cocktail' " 
              v-model="order.cloth" class="form-select mb-2 clothSelect" >
                <option value="no">Without cloth</option>
                <option value="yes">With cloth (+$2 each)</option>
              </select>
            </div>
            
            <button
              type="button"
              v-on:click="addEquipment()"
              class="btn btn-turquoise w-100 mb-3"
            >
              ➕ Add Equipment
            </button>
  
            
            <button v-on:click="makeReservation()" class="btn btn-turquoise w-100 mt-3">
              Make Reservation
            </button>
          </div>
        </div>
        
      </div>
      <div v-else
              class="calculator mt-4 p-4 rounded border-turquoise"
              style="background-color: #2a2a2a; color: #e0e0e0; width: 65%; margin: 0 auto;"
            >
            <button class="btn btn-sm close-btn" aria-label="Close"
              v-on:click="cancelReservation()">
              &times;
            </button>
              <h3 style="font-family: 'Dancing Script', cursive; color: #7ee7d3;">
                Reservation Summary
              </h3>
            
              <p><strong>Event type:</strong> {{ event || 'Not selected' }}</p>
              <p><strong>Date:</strong> {{ eventDate || 'Not selected' }}</p>
            
              <div v-for="order in reservation.orders" v-bind:key="order.equipment + order.cloth">
                <p>
                  {{ order.quantity }} × {{ order.equipment }}
                  <span v-if="canHaveCloth">
                    (cloth: {{ order.cloth }})
                  </span>
                </p>
              </div>
              <div class="d-flex gap-2 mt-4">
                <button type="button" class="btn btn-turquoise w-100 mb-3"
                  v-on:click="confirmReservation()">
                Confirm
                </button>
                <button class="btn btn-outline-light w-100 mb-3" style="border-color: #7ee7d3; color: #7ee7d3;"
                  v-on:click="cancelReservation()">
                    Cancel
                </button>
              </div>
        </div>
    </section>
</template>

<style>
.calculator {
    background-color: rgba(28, 28, 28, 0.8);
    padding: 25px;
    border-radius: 12px;
    border: 1px solid #333;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 600px) {
    .calculator {
      padding: 15px;
    }
  }
    /* Calculator Section */
  #calculator {
    background-color: #333;
    color: #e0e0e0;
  }
  /* Calculator Section */
  .calculator {
    background-color: #1b1b1b;
    color: #e0e0e0;
    font-family: "Poppins", sans-serif;
  }
  /* Totals */
  .totals {
    margin-top: 20px;
    font-size: 18px;
  }
  .btn-turquoise {
    background-color: #7ee7d3;
    color: #1b1b1b;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  .btn-turquoise:hover {
    background-color: #65d6c2;
  }
  .border-turquoise {
    border: 1px solid #7ee7d3;
  }
  .equipment-set {
    background-color: #2a2a2a;
    border: 1px dashed #7ee7d3;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  .form-select,
  .btn {
    background-color: transparent;
    border: 1px solid #7ee7d3;
    color: #e0e0e0;
    font-family: "Poppins", sans-serif;
  }
  .form-select:focus,
  .btn:focus {
    border-color: #7ee7d3;
    box-shadow: none;
  }


  .equipment-set {
  position: relative;
}

.remove-btn {
  position: absolute;
  top: 0px;
  right: 5px;
  background: transparent;
  border: none;
  color: #ccc;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.remove-btn:hover {
  color: #ff6b6b;
}
.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #7ee7d3;
  cursor: pointer;
  padding: 2px 6px;
  line-height: 1;
}

.close-btn:hover {
  color: #65d6c2;
}

</style>