import {useState} from "react";


function  Cities() {
    const cities = [
        {name: "Belgrade", country: "Serbia", temperature: "12C"},
        {name: "Madrid", country: "Spain", temperature: "22C"},
        {name: "Miami", country: "USA", temperature: "35C"}
    ];

    let [name, setName] = useState("");
    let [temperature, setTemperature] = useState("");
    let [country, setCountry] = useState("");
    let [allCities, setAllCities] = useState(cities);

    function addCity() {
        if (!name || !temperature || !country) {
            alert("Please enter a valid city");
            return;
        }

        let newCity = {
            name: name,
            temperature: temperature,
            country: country,
        }

        const newCities = [...allCities, newCity];

        setAllCities(newCities);
    }


    return (
        <>
            <div className="container mt-5">
                <div className="row g-16">
                    <div className="col-md-3">
                        <input placeholder="Enter City name" type="text" onInput={(e) => setName(e.target.value)} className="form-control"/>
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Enter Country name" type="text"
                               onInput={(e) => setCountry(e.target.value)} className="form-control"/>
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Enter Temperature" type="number"
                               onInput={(e) => setTemperature(e.target.value)} className="form-control"/>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100" onClick={addCity}>Add City</button>
                    </div>
                </div>
            </div>
                <div className="container mt-5">
                <div className="row g-16">
                {allCities.map(city => (

                    <ul className="col-md-3">
                        <li>{city.name}</li>
                        <li>{city.country}</li>
                        <li>{city.temperature}</li>
                    </ul>

                ))}
                </div>
                </div>

        </>
    )

}

export default Cities