
import testImg from '../../assets/images/trouser.jpg'
import cabbage from '../../assets/images/cabbage.jpg'


const TestData = [
    {
        id:1, 
        name:'Cabbage', 
        quantity: 4, 
        notes:'Should buy the cabbages in London Market', 
        imgSrc:{cabbage}
    },
    {
        id:2, 
        name:'Clothes', 
        quantity: 5, 
        notes:'Buy 6 or 5 crazy fun shirts', 
        imgSrc:{testImg}
    },
    {
        id:3, 
        name:'Trousers', 
        quantity: 3, 
        notes:'', 
        imgSrc:{testImg}
    },


] 


export { TestData };