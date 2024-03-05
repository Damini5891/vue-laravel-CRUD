<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="editEmployeeModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Employee</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <edit-employee :employee="selectedEmployee" @save="saveChanges" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditEmployee from '../components/EditEmployee.vue'; 

export default {
  props: {
    selectedEmployee: Object,
  },
  components: {
    EditEmployee,
  },
  methods: {
    saveChanges() {
      this.$emit('save');
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

