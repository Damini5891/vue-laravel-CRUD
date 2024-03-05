<template>
  <div class="container mt-3">
    <h2>Add Employee</h2>
    <form @submit.prevent="addEmployee">
      <div class="form-group">
        <label for="first_name">First Name:</label>
        <input v-model="employee.first_name" type="text" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="last_name">Last Name:</label>
        <input v-model="employee.last_name" type="text" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="employee.email" type="email" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="phone_number">Phone Number:</label>
        <input v-model="employee.phone_number" type="text" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="status">Status:</label>
        <select v-model="employee.status" class="form-control" required>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Add Employee</button>
      <a href ="/">Back to home</a>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employee: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        status: 'available'
      }
    };
  },
  methods: {
    addEmployee() {
      axios.post('http://localhost:8000/api/employees', this.employee)
        .then(response => {
          console.log('Employee added:', response.data);
          // Clear the form or update state
          this.clearForm();
        })
        .catch(error => {
          console.error('Error adding employee:', error);
        });
    },
    clearForm() {
      // Clear the form fields after adding an employee
      this.employee = {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        status: 'available'
      };
    }
  }
}
</script>
