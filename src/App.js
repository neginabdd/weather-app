import Weather from "./Weather.js"
function App() {
  return (
    <div class="bg-cover bg-center bg-sky h-screen w-screen min-h-screen min-w-screen md:h-full md:w-full lg:h-full lg:w-full xl:h-full xl:w-full">
    <div className="App">
   <Weather defaultCity="Tehran"/>
    </div>
    <footer className="mt-2">
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/users/71272-negin-abdollahzadeh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Negin Abdollahzadeh
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/neginabdd/weather-app/blob/master/src/WeatherForecast.js#L32-L33"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Render
          </a>
        </footer>
</div>
  );
}
export default App;
