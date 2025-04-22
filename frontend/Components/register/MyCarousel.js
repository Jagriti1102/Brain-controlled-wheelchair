import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="bg-white rounded-3xl text-dark py-6 2xl:py-14 text-center">
          <h3 className="text-xl font-cr-bold text-gray-500">Support</h3>
          <h4 className="text-sm font-cr-regular px-12 text-gray-500">
            An easy way to support the people in need
          </h4>
          <img
            src="https://img.freepik.com/free-vector/wheelchair-curling-concept-illustration_114360-18253.jpg?t=st=1744178115~exp=1744181715~hmac=f2304b41fd13160d7f5477bed7a61ab2504c2125070ce23477368fa3162ac851&w=1380"
            alt="Support"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white rounded-3xl text-dark py-6 2xl:py-14 text-center">
          <h3 className="text-xl font-cr-bold text-gray-500">Memberships</h3>
          <h4 className="text-sm font-cr-regular px-12 text-gray-500">
            Recurring revenue from your biggest fans
          </h4>
          <img
            src="https://img.freepik.com/free-vector/volunteers-helping-disabled-friends-outdoor-walking_74855-7933.jpg?t=st=1744177964~exp=1744181564~hmac=abf8970451947d39c30fe22bc8f754c583927a617b2dfcfa427024eb12be7db9&w=1380"
            alt="Memberships"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white rounded-3xl text-dark py-6 2xl:py-14 text-center">
          <h3 className="text-xl font-cr-bold text-gray-500">Shop</h3>
          <h4 className="text-sm font-cr-regular px-12 text-gray-500">
            A creative way to sell digital or physical items
          </h4>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-people-with-disabilities-illustration_23-2149651422.jpg?t=st=1744178265~exp=1744181865~hmac=6b200fa944e38e774f7cb9ad68b2c85b9c5b98a4efd12f70685ab95349f8ed0f&w=1380"
            alt="Shop"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
