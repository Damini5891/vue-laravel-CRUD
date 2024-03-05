<template>
  <div class="container mt-3">
    <h2>Edit Employee</h2>

    <form>
      <div class="form-group">
        <label for="first_name">First Name:</label>
        <input type="text" class="form-control" id="first_name" v-model="editedEmployee.first_name">
      </div>
      <div class="form-group">
        <label for="last_name">Last Name:</label>
        <input type="text" class="form-control" id="last_name" v-model="editedEmployee.last_name">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" v-model="editedEmployee.email">
      </div>
      <div class="form-group">
        <label for="phone_number">Phone Number:</label>
        <input type="text" class="form-control" id="phone_number" v-model="editedEmployee.phone_number">
      </div>
      <div class="form-group">
        <label for="status">Status:</label>
        <select class="form-control" id="status" v-model="editedEmployee.status">
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      <button type="button" class="btn btn-primary" @click="saveChanges">Save Changes</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedEmployee: { ...this.employee },
    };
  },
  methods: {
    saveChanges() {
      axios.put(`http://localhost:8000/api/employees/${this.editedEmployee.id}`, this.editedEmployee)
        .then(response => {
          console.log('Employee updated:', response.data);
        })
        .catch(error => {
          console.error('Error updating employee:', error);
        });
    },
  },
};
</script>
