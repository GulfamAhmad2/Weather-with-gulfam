import React, { useEffect, useState } from "react";

const Temp = () => {
  const [city, setCity] = useState(null);
  // console.log(city)
  const [search, setSearch] = useState("Thane");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=185811b9f348e2a6bb95995348d7d9b7`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response.main);
        setCity(response.main);
      });
  }, [search]);
  return (
    <>
    <div className="main-site">
      <div className="box">
      <h1 className="heading">Weather</h1>
        <div className="search">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {!city ? (
          <p className="not-found">not found</p>
        ) : (
          <div>
            <div className="info">
              <div className="city">
                <p className="city-name">City</p>
                <span className="temp-text">Temp</span>
                <span className="min-text">Min-Temp</span>
                <span className="max-text">Max-Temp</span>
                <span className="humidity-text">Humidity</span>
              </div>

              <div className="temprature">
                <span className="city-value">{search}</span>
                <span className="temp-value">{city.temp} °C</span>
                <span className="min-value">{city.temp_min} °C</span>
                <span className="min-value">{city.temp_max} °C</span>
                <span className="humidity-value">{city.humidity}</span>
              </div>
              
            </div>
          </div>
        )}
      </div>
      <div className="ellipse-1"></div>
    <div className="ellipse-2"></div>
    <div className="ellipse-3"></div>
    </div>
    </>
  );
};

export default Temp;
