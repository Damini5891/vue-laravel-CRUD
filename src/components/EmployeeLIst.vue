<template>
  <div class="container">
    <h2>Employee List</h2>
    <a href="/add-employee">Add Employee</a>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        {{ employee.first_name }} &nbsp;
         {{ employee.last_name }} &nbsp;
          {{ employee.email }} &nbsp;
           {{ employee.phone_number }} &nbsp;
            {{ employee.status }} &nbsp;
        <button @click="openEditModal(employee)">Edit</button>
        <button @click="deleteEmployee(employee.id)">Delete</button>
      </li>
    </ul>

    <edit-employee-modal
      v-if="isModalOpen"
      :selectedEmployee="selectedEmployee"
      @close="closeEditModal"
      @save="handleSaveChanges"
    />
  </div>
</template>

<script>
import axios from 'axios';
import EditEmployeeModal from '../components/EditEmployeeModal.vue'; 

export default {
  data() {
    return {
      employees: [],
      isModalOpen: false,
      selectedEmployee: null,
    };
  },
  mounted() {
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      axios.get('http://localhost:8000/api/employees')
        .then(response => {
          this.employees = response.data;
        })
        .catch(error => {
          console.error('Error fetching employees:', error);
        });
    },
    openEditModal(employee) {
      this.selectedEmployee = { ...employee };
      this.isModalOpen = true;
    },
    closeEditModal() {
      this.isModalOpen = false;
      this.selectedEmployee = null;
    },
    deleteEmployee(employeeId) {
      axios.delete(`http://localhost:8000/api/employees/${employeeId}`)
        .then(response => {
          console.log('Employee deleted:', response.data);
          this.fetchEmployees();
        })
        .catch(error => {
          console.error('Error deleting employee:', error);
        });
    },
  },
  components: {
    EditEmployeeModal,
  },
};
</script>

<style scoped>
.container{
  margin: 15rem;
}


</style>