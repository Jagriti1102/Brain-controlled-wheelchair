import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="bg-white rounded-3xl text-dark py-6 2xl:py-14 text-center">
          <h3 className="text-xl font-cr-bold text-green-700">Visually Impaired</h3>
          <img
            src="https://img.freepik.com/free-vector/blind-people-with-walking-cane-concept-illustration_114360-12869.jpg?t=st=1744209799~exp=1744213399~hmac=75a45f8c6efb5d49ed033e72326f8bf266375d017fffc31ee37ce9f9feaf595e&w=826"
            alt="Support"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white rounded-3xl text-dark py-6 2xl:py-14 text-center">
          <h3 className="text-xl font-cr-bold text-green-700">Paralyzed</h3>
          <img
            src="https://img.freepik.com/free-vector/care-elderly-abstract-concept-vector-illustration-eldercare-senior-homesick-nursing-care-services-happy-wheelchair-home-support-retired-people-nursing-home-abstract-metaphor_335657-1407.jpg?t=st=1744211534~exp=1744215134~hmac=27725bee99edaa7d1cd1b4aeab080c6b2e74db5bfe3df18aa22abd82366af8a3&w=826"
            alt="Memberships"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white rounded-3xl text-dark py-6 2xl:py-14 text-center">
          <h3 className="text-xl font-cr-bold text-green-700">Physically Challenged</h3>
          <img
            src="https://img.freepik.com/free-vector/paralympic-athletics-concept-illustration_114360-18142.jpg?t=st=1744209663~exp=1744213263~hmac=ae3128c1965c4420f3a7370a9e61049d5132e0d6bed3305dd1f684a868a9df53&w=826"
            alt="Shop"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;
