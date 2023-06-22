import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BookingForm from "./BookingForm";


const Gallery = () => {
  return (
    <div className="mb-5">
      <div
        className="hero min-h-8 my-5"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/top-view-spiral-pasta-soup-with-seasonings-dark-blue-desk-soup-sauce-color-italian-pasta-cuisine-dish_140725-121558.jpg?t=st=1683104347~exp=1683104947~hmac=a5a49ee0ee4f4c9a547ea90a985d6874ce5ad11cddd7b1e0e1be91be175d5cc1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Food Gallery</h1>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
      >
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/free-photo/side-view-pasta-with-tomato-sauce-wooden-table_176474-2506.jpg?w=740&t=st=1683022879~exp=1683023479~hmac=bcd929a54ff24b8138f6148ffba2f179a94c89968ee6c478c36fa09549fd0a62"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/free-photo/margharita-pizza-with-full-tomato-sauce-andgreen-basilica-leaves-per-slice_114579-1902.jpg?w=740&t=st=1683037179~exp=1683037779~hmac=a4af7854e479580b76d22692dcf20b63326e2220bc2813e4805bc47b816cc205"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-11250.jpg?w=740&t=st=1683037296~exp=1683037896~hmac=4c8f2c8d0f7b707ce8e62baf221ced35967f01a81af03d4a43498a449023fe5d"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/free-photo/slice-chocolate-brownie-with-walnut-vanilla-ice-cream_114579-878.jpg?w=740&t=st=1683041059~exp=1683041659~hmac=ef77e5d85511ea0294771859b9c7bbe9216736f2f1b0ba21e39b7311cb2aff60"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/premium-photo/spaghetti-dish-wooden-background_45583-1175.jpg?w=740"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=740&t=st=1683128640~exp=1683129240~hmac=0b9373a802557aec05da3c2a1927f1e48cd00877e2ef3afc51eb40266e50e6dc"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=740&t=st=1683155289~exp=1683155889~hmac=da4a767e1032ad3a97283a2a9243395096ca168220e58fc3039702df66c786d7"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-meat-tomatoes-decorated-with-pea-sprouts-dark-table_2829-3412.jpg?w=740"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6817.jpg?w=740&t=st=1683155531~exp=1683156131~hmac=dbd23656c9c3789c4904d8a8e452df928edaadb5e7f9dd5a42bb7bcbaf96bb78"
            alt=""
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-40"
            src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1683155620~exp=1683156220~hmac=ed46b9de8e3e1112c04afad52cdee5ef56eb2722dc8c49b9f8091e2e57c69ff1"
            alt=""
            
          />
        </SwiperSlide>
      </Swiper>
      <div
        className="hero min-h-8 my-5"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/reserved-dining-table_53876-94937.jpg?w=740&t=st=1683135759~exp=1683136359~hmac=35c9da158baf21fb65c2417606950f302612c65362e5e1da3abcca362a05b1e6")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Book a Table</h1>
          </div>
        </div>
      </div>
      <BookingForm></BookingForm>
    </div>
  );
};

export default Gallery;
