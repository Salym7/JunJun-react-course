import Card from "./components/Card";
import CardV2 from "./components/CardV2";
import DefinitionsList from "./components/DefinitionsList";
// import Progress from "./components/Progress";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
    const definitions = [
        {dt: 'one', dd: 'two', id: 1},
        {dt: 'another term', dd: 'another description', id: 2},
    ];

    return (
        <div className="App">
            <Card/>
            <CardV2 title={'Only TITLE'}/>
            <CardV2 text={'Only Text'}/>
            <CardV2 title={'This is TITLE'} text={'This is Text'}/>
            <DefinitionsList data={definitions}/>
            {/*<Progress  />;*/}
            <Alert type="primary" text="what is love?" />
            <Alert type="secondary" text="second what is love?" />
            <ListGroup>
                <p>one</p>
                <p>two</p>
            </ListGroup>
        </div>
    );
}

export default App;
