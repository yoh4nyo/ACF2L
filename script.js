const apiKey = '8c38233270bd4438b74191627242410';
    const city = 'Frotey-Les-Lures'; 
    const weatherWidget = document.getElementById('weather-info');
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données météo');
            }
            return response.json();
        })
        .then(data => {
            const temp = Math.round(data.current.temp_c);
            const weatherDescription = data.current.condition.text;
            const icon = data.current.condition.icon;
    
            document.getElementById('city').textContent = city;
            document.getElementById('temperature').textContent = `${temp} °C`;
                document.getElementById('description').textContent = weatherDescription;
            document.getElementById('weather-icon').src = `https:${icon}`;
        })
        .catch(error => {
            weatherWidget.innerHTML = `<p>Impossible de récupérer les données.</p>`;
            console.error(error);
        });
