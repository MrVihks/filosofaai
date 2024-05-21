import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col bg-cover bg-center justify-center items-center bg-[url('/images/background.jpg')]  ">
      <section className="min-h-screen w-full bg-light flex-col bg-opacity-90 gap-2 flex justify-center items-center">
        <img src="/images/meditation.svg" alt="" className="h-[500px] w-[500px]"/>
        <h1 className="text-[100px] text-dark ubuntu-regular font-bold">FILOSOFA AI</h1>
        <p className="text-5xl text-dark ubuntu-regular ">A ágora <span className="text-blue-900">moderna</span></p>
      </section>
    </section>  
  );
};

export default Home;
