public with sharing class SchedulerController {
    @AuraEnabled(cacheable=true)
    public static List<TimeSlot__c> getAvailableSlots(Date selectedDate) {
        // Fetch available slots for the given date
        return [SELECT Id, SlotTime__c FROM TimeSlot__c WHERE SlotDate__c = :selectedDate AND IsBooked__c = false];
    }

    @AuraEnabled
    public static void bookSlot(Id slotId) {
        // Book the selected slot
        TimeSlot__c slot = [SELECT Id, IsBooked__c FROM TimeSlot__c WHERE Id = :slotId LIMIT 1];
        if (slot != null) {
            slot.IsBooked__c = true;
            update slot;
        }
    }
}