import Card from "./components/Card";
import CardV2 from "./components/CardV2";
import DefinitionsList from "./components/DefinitionsList";

function App() {
    const definitions = [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
    ];

    return (
        <div className="App">
            <Card/>
            <CardV2 title={'Only TITLE'}/>
            <CardV2 text={'Only Text'}/>
            <CardV2 title={'This is TITLE'} text={'This is Text'}/>
            <DefinitionsList data={definitions} />;
        </div>
    );
}

export default App;
