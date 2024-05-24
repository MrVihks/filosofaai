import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <main>
      <nav className="bg-dark w-full h-[50px] flex justify-center items-center ">
        <h1 className="text-white text-2xl font-bold">Filosofa Ai</h1>
      </nav>
      <section className="min-h-screen bg-light flex max-md:flex-col gap-2">
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="text-2xl">Nome exemplo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <h1>Começe a expor suas ideias agora mesmo</h1>
                <Button className="bg-dark">Criar Post</Button>
            </CardContent>
        </Card>
        <Card className="w-[350px] h-[500px] bg-dark">
            <CardHeader>
                <CardTitle className="text-3xl text-white">Insights</CardTitle>
            </CardHeader>
          <CardContent className=" grid grid-cols-2 grid-rows-2 gap-2 p-2">
            <Card className="w-[150px] h-[150px] mt-2">
              <CardHeader className="text-dark">
                <CardTitle className="text-4xl font-bold">33</CardTitle>
                <CardTitle>Debates realizados no total</CardTitle>
              </CardHeader>
            </Card>
            <Card className="w-[150px] h-[150px] mt-2">
              <CardHeader className="text-dark">
                <CardTitle className="text-4xl font-bold">23</CardTitle>
                <CardTitle>Postagens feitas</CardTitle>
              </CardHeader>
            </Card>
            <Card className="w-[150px] h-[150px] mt-2">
              <CardHeader className="text-dark">
                <CardTitle className="text-4xl font-bold">3</CardTitle>
                <CardTitle>Pessoas <span className="text-red-400">discordam</span> das suas ideias</CardTitle>
              </CardHeader>
            </Card>
            <Card className="w-[150px] h-[150px] mt-2">
              <CardHeader className="text-dark">
                <CardTitle className="text-4xl font-bold">43</CardTitle>
                <CardTitle>Pessoas curtiram suas ideias</CardTitle>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default page;
