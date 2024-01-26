export const createStringFormatDate = (data) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const startDateString = data.start.toLocaleDateString('uk-UA', options);
    const endDateString = data.end.toLocaleDateString('uk-UA', options);
    
    const timeOptions = { hour: 'numeric', minute: 'numeric' };
    const startTimeString = data.start.toLocaleTimeString('uk-UA', timeOptions);
    const endTimeString = data.end.toLocaleTimeString('uk-UA', timeOptions);
    
    return {startDateString, endDateString, startTimeString, endTimeString};
}