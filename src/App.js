// import Card from "./components/Card";
// import CardV2 from "./components/CardV2";
// import DefinitionsList from "./components/DefinitionsList";
// import Progress from "./components/Progress";
// import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import BtnGroup from "./components/BtnGroup";
import Collapse from "./components/Collapse";
import MyForm from "./components/MyForm";
import Carousel from "./components/Carousel";
import Component1 from "./components/Component1";
import Card from "./components/Card/Card";

import './style.css';
import TodoBox from "./components/TodoBox";


function App() {
    // const definitions = [
    //     {dt: 'one', dd: 'two', id: 1},
    //     {dt: 'another term', dd: 'another description', id: 2},
    // ];
    const images = [
        'https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg',
        'https://www.w3schools.com/howto/img_nature_wide.jpg',
        'https://www.w3schools.com/w3css/img_mountains_wide.jpg',
        'https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg',
        'http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
    ]
    const text = 'collapse me, here a lot of text';

    return (
        <div className="App">
            {/*<Card/>*/}
            {/*<CardV2 title={'Only TITLE'}/>*/}
            {/*<CardV2 text={'Only Text'}/>*/}
            {/*<CardV2 title={'This is TITLE'} text={'This is Text'}/>*/}
            {/*<DefinitionsList data={definitions}/>*/}
            {/*<Progress percentage={40}/>*/}
            {/*<Progress percentage={100}/>*/}
            {/*<Alert type="primary" text="what is love?"/>*/}
            {/*<Alert type="secondary" text="second what is love?"/>*/}
            <ListGroup>
                <p>one</p>
                <p>two</p>
            </ListGroup>
            <BtnGroup/>
            <Collapse text={text} opened={true}/>
            <MyForm/>
            <Carousel images={images}/>
            <Component1/>
            <TodoBox/>
            <Card>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>Text</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default App;
