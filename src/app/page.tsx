'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faSchool } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter()
  return (
    <main>
      <section className="min-h-screen flex flex-col bg-cover bg-center justify-center items-center bg-[url('/images/background.jpg')]  ">
        <section className="min-h-screen w-full bg-light flex-col bg-opacity-[90%] gap-2 flex justify-center items-center">
          <img
            src="/images/meditation.svg"
            alt=""
            className="md:h-[400px] md:w-[400px] max-md:h-[250px] max-md:w-[250px]"
          />
          <h1 className="md:text-[100px] max-md:text-[45px] text-dark ubuntu-regular font-bold">
            FILOSOFA AI
          </h1>
          <p className="text-5xl max-md:text-2xl text-dark ubuntu-regular ">
            A ágora <span className="text-blue-900">moderna</span>
          </p>
        </section>
      </section>
      <section className="min-h-screen bg-dark flex max-md:flex-col items-center md:justify-center gap-6">
        <Card className="bg-light shadow-2xl w-[350px] max-md:w-[300px] p-2 h-[400px] max-md:mt-[20px] max-md:h-[300px] ">
          <CardHeader>
            <CardTitle className="text-xl text-dark md:text-2xl">
              Gosta de Filosofia, mas não tem ninguém para discutir ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-darkest">
              Nós temos o objetivo de <span className="text-dark font-bold">incentivar</span> a filosofia e o pensamento
              crítico, venha partilhar suas ideias conosco !
            </p>
          </CardContent>
        </Card>
        <Card className="bg-light shadow-2xl w-[350px] p-2 max-md:w-[300px] h-[400px] max-md:h-[300px]">
          <CardHeader>
            <CardTitle className="text-xl text-dark md:text-2xl">
              Conheça as escolas filosóficas{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex gap-2 text-dark font-bold text-lg">
              <FontAwesomeIcon className="w-[30px]" icon={faSchool} />{" "}
              Estoicismo
            </p>
            <p className="flex gap-2 text-dark font-bold text-lg">
              <FontAwesomeIcon className="w-[30px]" icon={faSchool} />{" "}
              Epicurismo
            </p>
            <p className="flex gap-2 text-dark font-bold text-lg">
              <FontAwesomeIcon className="w-[30px]" icon={faSchool} /> Cinismo
            </p>
            <p className="flex gap-2 text-dark font-bold text-lg">
              <FontAwesomeIcon className="w-[30px]" icon={faSchool} /> Ceticismo
            </p>
            <p className="flex gap-2 text-dark font-bold text-lg">
              <FontAwesomeIcon className="w-[20px]" icon={faPlus} /> Entre outras..
            </p>
          </CardContent>
        </Card>
        <Card className="bg-light shadow-2xl w-[350px] max-md:w-[300px] p-2 h-[400px] max-md:h-[300px] max-md:mb-4">
          <CardHeader>
            <CardTitle className="text-xl text-dark md:text-2xl">Se interessou ?</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-lg">Venha fazer parte da nossa comunidade</p>
            <Button onClick={()=>router.push("/register")} className="bg-dark w-[150px] h-[50px] flex justify-start mt-[20px]">Cadastre-se <Separator className="rotate-90 w-[35px]"/> </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Home;
