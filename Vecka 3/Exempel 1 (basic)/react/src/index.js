import React, { Fragment as F } from 'react';

import { render } from 'react-dom';

import {Box} from './components/Box';

import styles from './components/ProductList.css'


// // <-----------WTF----------->

// const withLogging = C => {
//     return class extends React.Component {
//         render(){
//             console.log(
//                 'Rendering compontents @ ' + new Date().toLocaleTimeString()
//             );
//             return <C {...this.props}/>
//         }
//     }
// }
// let Comp1 = ({ name }) => <div> {name} </div>
// let Comp2 = ({ name }) => <p> {name} </p>

// Comp1 = withLogging(Comp1)
// Comp2 = withLogging(Comp2)

// render(
//     <div>
//         <Comp1 name="Components 1"/>
//         <Comp1 name="Components 2"/>
//     </div>,
//     document.getElementById('root')
// )

// // <-----------WTF----------->

// // <------------WORKING WITH FORMS IN REACT-------------->

// class NameForm extends React.Component {
//     state = { name: null, submittedName: null }
    
//     submit = () => {
       
//         this.setState(prevState => {
//             return {
//                 submittedName: prevState.name
//             }
//         }) //This.state gör så att vi renderar om. Nu dock med det nya namnet. 
//     }
    
//     change = event => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     render() {
//         const { name, submittedName } = this.state;
//         let inputValue;

//         if(name ===submittedName){
//             inputValue = '';
//         }

//         return (
//             <div>
//                 <input 
//                     type="text" 
//                     defaultValue=""
//                     value={inputValue}
//                     onChange={this.change}
//                     //ref={inputElement => this.inputElement = inputElement} //Detta är för att skapa en referens till input när man klickar på button
//                     //"ref=" är magiskt inom react. Den som gör att jag kan hämta ut inputElement.
//                 /> 
//                 <button onClick={this.submit}>Submit Name</button>
//                 <p>Submitted Name: {submittedName} </p>
//             </div>
//         )
//     }
// }

// render(
//     <NameForm />,
//     document.getElementById('root')
// )


// // <------------/////////WORKING WITH FORMS IN REACT-------------->





// // <------------- CLASSCOMPONENT WITH FETCHING PRODUCTS -------------->

class ProductList extends React.Component {
    state = { products: null }

    componentDidMount() {
        fetch('http://demo.edument.se/api/products')
            .then(res => res.json())
            .then((res) => this.setState({products: res}))
    }

    render() {
        const { products } = this.state
        if(products === null){
            return 'Loading products'
        }
        return (
            // this.state.products.map(item => <p key={item.Id}>{item.Name}</p>)

            <ul>
                {products.map(({Id,Name}) => <Product
                key = {Id}
                id={Id}
                name={Name}
                remove={this.removeProduct}
                />)}
            </ul>
        );
    }
    removeProduct = productId => {
        console.log(`Removing product ${productId}`)
        this.setState(prevState => {
            return {
                products: prevState.products.filter(
                    product => product.Id !== productId
                )
            }
        })
    }
}

const Product = ({id, name, remove}) => (
    <div onClick={() => remove(id)}>
        <p className={styles.textColor}>Id: {id}, Name: {name}</p>
    </div>
)

render(
    <ProductList />,
    document.getElementById('root')
)

// // <------------- CLASSCOMPONENT WITH FETCHING PRODUCTS -------------->


// //<---------- CLASSCOMPONENTS MED CLICKEVENT ---------->


// class AwesomeCounter extends React.Component{
//     state = { count: 0 };

//     increment = () => { //arrowfunction så att vi binder this.
//         this.setState(prevState => ({ //kan inte använda this.state.count då vi måste göra ett nytt object för att ersätta det gamla
//             count: prevState.count + 1
//         }))
//     }
//     decrement = () => {
//         if (this.state.count > 0 ){
//             this.setState(prevState => ({
//                 count: prevState.count - 1
//             }))
//         } else {
//             alert('Cant go under 0')
//         }
//     }
//     componentWillMount(){
//         console.log('AwesomeCounter is mounting')
//     }

//     componentDidMount(){
//         console.log('AwesomeCounter is mounted')
//     }

//     render(){
//         console.log('AwesomeCounter is rendering')
//         const { count } = this.state;
//         return (
//             <div>
//                 <p>this count is: {count}</p>
//                 <button onClick={this.increment}>Increment</button>
//                 <button onClick={this.decrement}>Decrement</button>
//             </div>
//         )
//     }
// }

// render(
//     <AwesomeCounter />,
//     document.getElementById('root')
// )

// //<---------- ///////CLASSCOMPONENTS MED CLICKEVENT ---------->



//<---------- CLASSCOMPONENTS MED CLICKEVENT ---------->

// class Clickableword extends React.Component {
//     showExplanation = () => {
//         alert(this.props.explanation)
//     }

//     render() {
//         return <span onClick={this.showExplanation}>{this.props.word}</span>
//     }
// }

// render(
//     <Clickableword explanation='Wowwww' word='blabla'/>,
//     document.getElementById('root')
// )

//<---------- ///// CLASSCOMPONENTS ---------->





//<---------- CLASSCOMPONENTS ---------->
//mitt exempel. Där count ökar med vad som skickas in

// <-------------------------------->

// class Counter extends React.Component {
//     state = {count: 1};

//     render() {
//         const {count} = this.state;
//         const {value} = this.props;

//         return <p> the count is: {count + value}</p>
//     }
// }

// render(
//     <Counter value={5}/>,
//     document.getElementById('root')
// )

// <-------------------------------->


// <--------------MARCS GENOMGÅNG NEDAN---------------_>

// class ImageGallery extends React.Component {
//     state = { imageIndex: 0 }

//     render() {
//         return <img src={this.props.images[this.state.imageIndex]} />
//     }
// }

// // const ImageGallery = props => {
// //     return <img src={props.images[imageIndex]}/>
// // }

// const imageList  = ['http://bild1.jpg']

// render(
//     <ImageGallery images={imageList} />,
//     document.getElementById('root')
// )
//<---------- ////CLASSCOMPONENTS ---------->





// -------------------------------------------------------------------------------
// const PhotoPost = ({ PhotoUrl }) => (
//     <img src={PhotoUrl}/>
// )
// const TextPost = ({content}) => (
//     <p>{content}</p>
// )

// const components = {
//     photo: PhotoPost,
//     text: TextPost
// }

// const ShowPost = ({ asType, ...rest }) => {
//     const PostComponent = components[asType]; //Även denna måste ha en stor bokstav i början.
//     return <PostComponent {...rest}/>;
// }
// render(
//     <ShowPost asType='text' content='this is my friend'/>,
//     document.getElementById('root')
// )






// ----------------------------------------------------------------------------------
// const Box = ({ size, style, className = '', ...rest }) => (
//     <div
//         className={`box box--${size} ${className}`}
//         style={{ paddingLeft: '20px', ...style}}
//         {...rest}
//     >
//     </div>
// )

// render(
//     <div>
//         <Box size="small"     style={{ backgroundColor: 'blue' }} />
//         <Box size="medium"    style={{ backgroundColor: 'green' }} />
//         <Box size="large"     style={{ backgroundColor: 'red' }} />
//     </div>,
//     document.getElementById('root')
// )





// ----------------------------------------------------------------------------------
// import React, { Fragment as F } from 'react';
// import { render } from 'react-dom';

// const globalItems = [
//     { id: 0, name: 'marc' },
//     { id: 1, name: 'linnea' },
//     { id: 2, name: 'simon' },
//     { id: 3, name: 'tobias' }
// ]

// const ItemList = ({ items }) => {
//     return (
//         <F>
//             <ul>
//                 {items.map((item, index) => <li key={item.id}>{item.name} <input /></li>)}
//             </ul>
//             <button
//                 onClick={() => { globalItems.splice(1, 1); renderApp() }}>
//                 Delete Item
//             </button>
//         </F>
//     )
// }

// const renderApp = () => {
//     render(
//         <ItemList items={globalItems} />,
//         document.getElementById('root')
//     )
// }

// renderApp();



// ----------------------------------------------------------------------------------
// import React, { Fragment as F } from 'react';
// import { render } from 'react-dom';

// // ...

// const Organisation = ({ name, ceo }) => (
//     <F>
//         <p>CEO for organisation: {ceo}</p>
//         <p>Organisation: {name}</p>
//         <Group ceo={ceo} name="Developers" />
//     </F>
// )

// const Group = ({ ceo, name }) => (
//     <F>
//         <p>CEO for group: {ceo}</p>
//         <p>Group: {name}</p>
//         <User ceo={ceo} name="Marc Klefter" />
//     </F>
// )

// const User = ({ ceo, name }) => (
//     <F>
//         <p>CEO for user: {ceo}</p>
//         <p>User: {name}</p>
//     </F>
// )

// render(
//     <Organisation name="ACME AB" ceo="Big Boss" />,
//     document.getElementById('root')
// )