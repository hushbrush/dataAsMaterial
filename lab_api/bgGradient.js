async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '0a6dba754e316ff8e64f8b38395bda13'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const weatherCondition = data.weather[0].main.toLowerCase(); // Get main weather condition

        document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
        document.getElementById('weather').innerText = `Weather: ${description}`;

        changeBackground(temp, weatherCondition);
    } catch (error) {
        console.log(error.message);
    }
}

function changeBackground(temp, condition) {
    let colors = [];

    if (temp <= 0) {
        colors = ["#0f2027", "#203a43", "#2c5364"]; // Cold weather
    } else if (temp > 0 && temp <= 15) {
        colors = ["#56CCF2", "#2F80ED", "#1B95E0"]; // Cool tones
    } else if (temp > 15 && temp <= 25) {
        colors = ["#67B26F", "#4ca2cd", "#6a11cb"]; // Mild tones
    } else {
        colors = ["#FF512F", "#F09819", "#FF416C"]; // Warm tones
    }

    applyMovingGradient(colors);
    applyWeatherOverlay(condition);
}

function applyMovingGradient(colors) {
    const gradientAnimation = `
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;

    let styleTag = document.getElementById("gradient-style");
    if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "gradient-style";
        document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = gradientAnimation;

    document.body.style.background = `linear-gradient(-45deg, ${colors.join(", ")})`;
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradientShift 10s ease infinite";
}

function applyWeatherOverlay(condition) {
    const overlay = document.getElementById("weatherOverlay");

    if (condition.includes("rain")) {
        overlay.style.background = "rgba(0, 0, 0, 0.4)";
        overlay.style.backdropFilter = "blur(5px)";
        overlay.style.animation = "rainEffect 0.3s infinite linear";
    } else if (condition.includes("cloud")) {
        overlay.style.background = "rgba(100, 100, 100, 0.3)";
        overlay.style.backdropFilter = "blur(3px)";
        overlay.style.animation = "";
    } else if (condition.includes("clear")) {
        overlay.style.background = "rgba(255, 255, 255, 0.1)";
        overlay.style.backdropFilter = "blur(0px)";
        overlay.style.animation = "";
    } else if (condition.includes("snow")) {
        overlay.style.background = "rgba(200, 230, 255, 0.5)";
        overlay.style.backdropFilter = "blur(8px)";
        overlay.style.animation = "snowEffect 1s infinite linear";
    } else {
        overlay.style.background = "rgba(0, 0, 0, 0)";
        overlay.style.animation = "";
    }
}
