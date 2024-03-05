import { createRouter, createWebHistory } from 'vue-router';
import EmployeeList from '../components/EmployeeLIst.vue';
import AddEmployee from '../components/AddEmployee.vue';
import EditEmployeeModal from '@/components/EditEmployee.vue';

const routes = [
  { path: '/', component: EmployeeList },
  { path: '/add-employee', component: AddEmployee },
  { path: '/edit-employee', component: EditEmployeeModal }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
