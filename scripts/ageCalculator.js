function calculateAge(birthDateString) {
    // Convert the birthDateString to a Date object
    const birthDate = new Date(birthDateString);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Adjust the age if the birth date hasn't happened yet this year
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Function to update the age display
function updateAgeDisplay() {
    // Replace "YYYY-MM-DD" with your actual date of birth in the format "YYYY-MM-DD"
    const birthDateString = "1988-01-07";

    const age = calculateAge(birthDateString);

    // Update the content of the <span> element with the calculated age
    document.getElementById("ageDisplay").textContent = age;
}

updateAgeDisplay();