
import Weather from "./Weather.js"

function App() {
  return (
    <div class="bg-cover bg-center bg-[url('beautiful-cloudscape.jpg')] h-screen w-screen min-h-screen min-w-screen md:h-full md:w-full lg:h-full lg:w-full xl:h-full xl:w-full">
    <div className="App">
   <Weather defaultCity="New York"/>
    </div>
</div>
  );
}

export default App;
