import React from 'react'
import rolex from './images/rolex-watch3.jpeg'
import hoodie from './images/hoodie1.jpeg'
import macbookPro from './images/macbook-pro2.jpeg'
import headphone from './images/headphone1.jpeg'
import backpack from './images/backpack1.jpeg'
import folio from './images/hp-folio2.jpeg'
import appleWatch from './images/apple-watch2.jpeg'
import airpod from './images/airpods3.jpeg'
import ultra from './images/samsung-ultra2.jpeg'
import shoe from './images/shoes.jpeg'
import cap from './images/cap2.jpeg'
import iphone from './images/iphone13-1.jpeg'
import benteley from './images/benteley1.jpeg'
import tablet from './images/tablet1.jpeg'
import macBook from './images/macbokpro2022.jpeg'
import mouse from './images/mouse2.jpg'
import keyboard from './images/keyboard.jpg'
import belt from './images/belt.jpg'
import bicycle from './images/bicycle2.jpg'
import sneakers from './images/sneakers.jpg'
import ladies from './images/ladies-sneakers.jpg'
import shirt from './images/shirt.jpg'
import cooker from './images/cooker2.jpg'
import inspiron from './images/inspiron1.jpg'
import trouser from './images/trouser.jpg'
import image1 from './images/watch3.jpeg'
import image2 from './images/watch2.jpeg'
import image3 from './images/shoe4.jpeg'
import image4 from './images/shoe2.jpeg'
import image5 from './images/shoe3.jpeg'
import image6 from './images/shirt4.jpeg'
import image7 from './images/shirt3.jpeg'
import image8 from './images/shirt2.jpeg'
import image9 from './images/gown2.webp'
import image10 from './images/gown3.webp'
import image11 from './images/bag3.jpeg'
import image12 from './images/bag2.webp'
import image13 from './images/fem2.jpeg'
import image14 from './images/fem5.jpeg'
import image15 from './images/bag6.webp'


// import hoodie from './images/hoodie1.jpeg'

const data = [
    {
        id: 1,
        image: rolex,
        title: 'Golden Rolex Watch',
        price: 200,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '25%',
        brand: 'Rolex',
        prevPrice: 250,
        likes: 150,
        keyword: 'male'
    },
    {
        id: 2,
        image: hoodie,
        title: 'Black Hoodie',
        price: 70,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Hugo Boss',
        prevPrice: 95,
        likes: 200
    },
    {
        id: 3,
        image: macbookPro,
        title: 'Macbook Pro',
        price: 870,
        quantity: 12,
        likes: 350,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '30%',
        brand: 'Apple Inc.',
        prevPrice: 980,
    },
    {
        id: 4,
        image: headphone,
        title: 'Samsung Headphone',
        price: 52,
        quantity: 10,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '15%',
        brand: 'Samsung',
        prevPrice: 60,
        likes: 55
    },
    {
        id: 5,
        image: backpack,
        title: 'Backpack',
        price: 85,
        quantity: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '35%',
        brand: 'Gucci',
        prevPrice: 290,
        keyword: 'female'
    },
    {
        id: 6,
        image: folio,
        title: 'HP Folio Laptop',
        price: 173,
        quantity: 7,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'HP',
        prevPrice: 195,
    },
    {
        id: 7,
        image: appleWatch,
        title: 'Apple Watch',
        price: 115,
        quantity: 15,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Apple',
        prevPrice: 135,
    },
    {
        id: 8,
        image: airpod,
        title: 'Airpods',
        price: 53,
        quantity: 18,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '25%',
        brand: 'Apple',
        prevPrice: 70,
    },
    {
        id: 9,
        image: ultra,
        title: 'Samsung S22 Ultra',
        price: 310,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '28%',
        brand: 'Samsung',
        prevPrice: 360,
    },
    {
        id: 10,
        image: shoe,
        title: 'Shoes',
        price: 100,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '22%',
        brand: 'Adidas',
        prevPrice: 110,
        keyword: 'male'
    },
    {
        id: 11,
        image: cap,
        title: 'Cap',
        price: 30,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '28%',
        brand: 'Versace',
        prevPrice: 45,
    },
    {
        id: 12,
        image: iphone,
        title: 'iphone 13pro',
        price: 624,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '18%',
        brand: 'Apple',
        prevPrice: 712,
    },
    {
        id: 13,
        image: benteley,
        title: 'Benteley',
        price: 900,
        quantity: 3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Benteley',
        prevPrice: 988,
    },
    {
        id: 14,
        image: macBook,
        title: 'Macbook pro 2022',
        price: 750,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '15%',
        brand: 'Apple Inc.',
        prevPrice: 812,
    },
    {
        id: 15,
        image: tablet,
        title: 'Samsung Tablet',
        price: 405,
        quantity: 8,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '27%',
        brand: 'Samsung',
        prevPrice: 488,
    },
    {
        id: 16,
        image: sneakers,
        title: 'Men Sneakers',
        price: 60,
        quantity: 10,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '30%',
        brand: 'Nike',
        prevPrice: 88,
        keyword: 'male'
    },
    {
        id: 17,
        image: trouser,
        title: 'Jean Trouser',
        price: 45,
        quantity: 12,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Gucci',
        prevPrice: 55,
        keyword: 'male'
    },
    {
        id: 18,
        image: bicycle,
        title: 'Bicycle',
        price: 210,
        quantity: 7,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Tesla',
        prevPrice: 235,
    },
    {
        id: 19,
        image: inspiron,
        title: 'Dell Inspiron Laptop',
        price: 350,
        quantity: 6,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '21%',
        brand: 'Dell',
        prevPrice: 420,
    },
    {
        id: 20,
        image: belt,
        title: 'Belt',
        price: 15,
        quantity: 10,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '50%',
        brand: 'Adidas',
        prevPrice: 30,
        keyword: 'male'
    },
    {
        id: 21,
        image: cooker,
        title: 'Electric Cooker',
        price: 120,
        quantity: 3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Emel',
        prevPrice: 130,
    },
    {
        id: 22,
        image: shirt,
        title: 'Shirt',
        price: 35,
        quantity: 12,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '50%',
        brand: 'Dior',
        prevPrice: 70,
        keyword: 'male'
    },
    {
        id: 23,
        image: ladies,
        title: 'Ladies Sneakers',
        price: 92,
        quantity: 11,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '15%',
        brand: 'Gucci',
        prevPrice: 127,
        keyword: 'female'
    },
    {
        id: 24,
        image: keyboard,
        title: 'Magic Keyboard',
        price: 32,
        quantity: 10,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '50%',
        brand: 'HP',
        prevPrice: 64,
    },
    {
        id: 25,
        image: mouse,
        title: 'Wireless Mouse',
        price: 25,
        quantity: 8,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '50%',
        brand: 'HP',
        prevPrice: 50,
    },
    {
        id: 26,
        image: image1,
        title: 'Watch',
        price: 150,
        quantity: 3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '25%',
        brand: 'Rolex',
        prevPrice: 180,
        keyword: 'male'
    },
    {
        id: 27,
        image: image2,
        title: 'Silver Watch',
        price: 130,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '40%',
        brand: 'G-Shock',
        prevPrice: 175,
        keyword: 'male'
    },
    {
        id: 28,
        image: image3,
        title: 'Fashion Sneakers',
        price: 220,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Versace',
        prevPrice: 245,
        keyword: 'male'
    },
    {
        id: 29,
        image: image4,
        title: "Men's Shoe",
        price: 190,
        quantity: 7,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '30%',
        brand: 'Louis Vuitton',
        prevPrice: 250,
        keyword: 'male'
    },
    {
        id: 30,
        image: image5,
        title: 'Leather Shoe',
        price: 325,
        quantity: 2,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Prada',
        prevPrice: 357,
        keyword: 'male'
    },
    {
        id: 31,
        image: image6,
        title: 'T-shirt',
        price: 120,
        quantity: 9,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Gucci',
        prevPrice: 132,
        keyword: 'male'
    },
    {
        id: 32,
        image: image7,
        title: 'Longsleeve T-Shirt',
        price: 130,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Lacoste',
        prevPrice: 143,
        keyword: 'male'
    },
    {
        id: 33,
        image: image8,
        title: 'Shirt',
        price: 88,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Prada',
        prevPrice: 120,
        keyword: 'male'
    },
    {
        id: 34,
        image: image9,
        title: 'Ladies gown',
        price: 88,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Prada',
        prevPrice: 120,
        keyword: 'female'
    },
    {
        id: 35,
        image: image10,
        title: 'Fashion Gown',
        price: 230,
        quantity: 8,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '20%',
        brand: 'Fendi',
        prevPrice: 280,
        keyword: 'female'
    },
    {
        id: 36,
        image: image11,
        title: 'Fashion Bag',
        price: 74,
        quantity: 3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '26%',
        brand: 'Gucci',
        prevPrice: 100,
        keyword: 'female'
    },
    {
        id: 37,
        image: image12,
        title: 'Black Bag',
        price: 62,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Fendi',
        prevPrice: 69,
        keyword: 'female'
    },
    {
        id: 38,
        image: image13,
        title: 'Female Sneakers',
        price: 50,
        quantity: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '150%',
        brand: 'Balenciaga',
        prevPrice: 65,
        keyword: 'female'
    },
    {
        id: 39,
        image: image14,
        title: 'Pink Sneakers',
        price: 72,
        quantity: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Gucci',
        prevPrice: 80,
        keyword: 'female'
    },
    {
        id: 40,
        image: image15,
        title: 'Set of Bags',
        price: 110,
        quantity: 3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem tempore, harum praesentium fugit consequuntur perspiciatis sint incidunt blanditiis eligendi',
        discountPercent: '10%',
        brand: 'Versace',
        prevPrice: 122,
        keyword: 'female'
    },
    
]

export default data