function predictDeath() {
    const username = document.getElementById("name").value;
    const userage = Number(document.getElementById("age").value);

    if (!username || isNaN(userage) || userage <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid details.";
        return;
    }

    const yearOfBirth = 2025 - userage;
    const estimatedDeathYear = yearOfBirth + 70;

    document.getElementById("result").innerHTML = `Hello ${username}, you were born in ${yearOfBirth}. You might live until around ${estimatedDeathYear}.`;
}