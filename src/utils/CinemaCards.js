import React from "react";
import CardProps from "../contexts/Cards";
import { cardBg1 } from "./Image";

function CinemaCard() {
  const cards = [
    {
      id: 1,
      bgImg: cardBg1,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 2,
      bgImg: cardBg1,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 3,
      bgImg: cardBg1,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 4,
      bgImg: cardBg1,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 5,
      bgImg: cardBg1,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 6,
      bgImg: cardBg1,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum accusantium sunt eligendi impedit vel fuga nam.",
      fnc: "",
    },
    {
      id: 7,
      bgImg: cardBg1,
      price: "100",
      month: "Sep",
      day: "12",
      title: "hello",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem tempora voluptatibus voluptatum ",
      fnc: "",
    },
  ];

  return (
    <main className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-3 p-4">
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
