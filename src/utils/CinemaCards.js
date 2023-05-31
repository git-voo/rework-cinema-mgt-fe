import React from "react";
import CardProps from "../contexts/Cards";
// import { cardBg1 } from "./Image";
import  image1  from "../assets/images/imag1.jpeg";
import  image2  from "../assets/images/image2.jpeg";
import  image3  from "../assets/images/image3.jpeg";
import  image4  from "../assets/images/image4.jpeg";
import  image5  from "../assets/images/image5.jpeg";
import  image6  from "../assets/images/image6.jpeg";
import  image7  from "../assets/images/image7.jpeg";


function CinemaCard() {
  const cards = [
    {
      id: 1,
      bgImg: image1,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 2,
      bgImg: image2,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 3,
      bgImg: image3,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 4,
      bgImg: image4,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 5,
      bgImg: image5,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 6,
      bgImg: image6,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 7,
      bgImg: image7,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum ",
      fnc: "",
    },
  ];

  return (
    <main className="grid xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
      {cards.map((data) => (
        <CardProps
          bgImg={data.bgImg}
          price={data.price}
          month={data.month}
          day={data.day}
          title={data.title}
          body={data.body}
          fnc={undefined}
        />
      ))}
    </main>
  );
}

export default CinemaCard;
