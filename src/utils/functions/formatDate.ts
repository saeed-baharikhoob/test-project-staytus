export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    // Get the day of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    // Get the day of the month
    const day = date.getUTCDate();

    // Get the AM/PM
    const hours = date.getUTCHours();
    const period = hours < 12 ? "AM" : "PM";

    return `${dayOfWeek} ${day}, ${hours} ${period}`;
};
