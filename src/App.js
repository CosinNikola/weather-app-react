import './App.css';
import Container from './components/UI/Container';
import Label from './components/content/Label';
import Details from './components/UI/Details';
import Image from './components/content/Image';
import InputForm from './components/UI/InputForm';
import Modal from './components/UI/Modal';
import { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState({"coord":{"lon":19.8369,"lat":45.2517},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":19,"feels_like":18.52,"temp_min":19,"temp_max":19,"pressure":1017,"humidity":60,"sea_level":1017,"grnd_level":1008},"visibility":10000,"wind":{"speed":1.72,"deg":305,"gust":1.39},"clouds":{"all":43},"dt":1651051252,"sys":{"type":1,"id":7030,"country":"RS","sunrise":1651030545,"sunset":1651081236},"timezone":7200,"id":3194360,"name":"Novi Sad","cod":200});
  const [showModal, setShowModal] = useState(false);
  async function handleCityChange(newCity) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=832cb69f1533e7a7c5c57cdf8db4709d&units=metric`);
    const data = await res.json();
    if(res.status === 200){
      setWeatherData(data);
    }
    else{
     setShowModal(true);
    }
  }
  const toggleModalHandler = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      {showModal ? <Modal onToggle={toggleModalHandler}/>: ''}
      <Container icon={weatherData.weather[0].icon}>
        <Label fontSize='35' color='black'>
       {weatherData.name}, {weatherData.sys.country}
        </Label>
        <Label fontSize='40' color='white'>
          {Math.round(weatherData.main.temp)}&#176; C
        </Label>
        <Image icon={weatherData.weather[0].icon}/>
        <Label fontSize='30' color='white'>
          {weatherData.weather[0].main}
        </Label>
        <Label fontSize='26' color='black'>
          Feels like: {Math.round(weatherData.main.feels_like)}&#176; C
        </Label>
        <Label fontSize='24' color='white'>
          Max/Min: {Math.round(weatherData.main.temp_max)}&#176; C / {Math.round(weatherData.main.temp_min)}&#176; C 
        </Label>
        <Details data={weatherData}/>
        <InputForm onCityChange={handleCityChange}/>
      </Container>
    </div>
  );
}

export default App;
