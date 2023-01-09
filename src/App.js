import Card from "./components/Card";
import CardV2 from "./components/CardV2";
import DefinitionsList from "./components/DefinitionsList";
import Progress from "./components/Progress";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import BtnGroup from "./components/BtnGroup";
import Collapse from "./components/Collapse";
import MyForm from "./components/MyForm";
import Carousel from "./components/Carousel";
import slide1 from "./assets/slide1.jpg"
import slide2 from "./assets/slide2.jpg"
import slide3 from "./assets/slide3.jpg"

        
function App() {
    const definitions = [
        {dt: 'one', dd: 'two', id: 1},
        {dt: 'another term', dd: 'another description', id: 2},
    ];
    const images = [
        {slide1},
        {slide2},
        {slide3},
    ]
    const text = 'collapse me, here a lot of text';

    return (
        <div className="App">
            <Card/>
            <CardV2 title={'Only TITLE'}/>
            <CardV2 text={'Only Text'}/>
            <CardV2 title={'This is TITLE'} text={'This is Text'}/>
            <DefinitionsList data={definitions}/>
            <Progress percentage={40}/>
            <Progress percentage={100}/>
            <Alert type="primary" text="what is love?"/>
            <Alert type="secondary" text="second what is love?"/>
            <ListGroup>
                <p>one</p>
                <p>two</p>
            </ListGroup>
            <BtnGroup/>
            <Collapse text={text} opened={true}/>
            <MyForm/>
            <Carousel images={images}/>
        </div>
    );
}

export default App;
