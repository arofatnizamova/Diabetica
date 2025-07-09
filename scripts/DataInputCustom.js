export function renderCustomDateInput(inputId){
    flatpickr(inputId, {
        dateFormat: "Y-m-d",
        maxDate: "today",
        locale: "ru"
    });
}



