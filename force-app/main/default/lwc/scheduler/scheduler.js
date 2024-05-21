import { LightningElement, track } from 'lwc';
import getAvailableSlots from '@salesforce/apex/SchedulerController.getAvailableSlots';
import bookSlot from '@salesforce/apex/SchedulerController.bookSlot';

export default class Scheduler extends LightningElement {
    @track selectedDate;
    @track timeSlots = [];
    @track isLoading = false;
    @track errorMessage = '';
    @track successMessage = '';

    handleSelectDate(event) {
        this.selectedDate = event.target.value;
        this.fetchTimeSlots();
    }

    fetchTimeSlots() {
        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';
        getAvailableSlots({ selectedDate: this.selectedDate })
            .then(result => {
                this.timeSlots = result;
                this.isLoading = false;
            })
            .catch(error => {
                this.errorMessage = 'Failed to fetch available slots.';
                this.isLoading = false;
            });
    }

    handleSlotSelection(event) {
        const selectedSlotId = event.target.dataset.id;
        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';
        bookSlot({ slotId: selectedSlotId })
            .then(() => {
                this.successMessage = 'Slot successfully booked!';
                this.isLoading = false;
                this.fetchTimeSlots();  // Refresh available slots
            })
            .catch(error => {
                this.errorMessage = 'Failed to book the slot.';
                this.isLoading = false;
            });
    }
}