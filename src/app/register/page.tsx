"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen bg-dark flex flex-col justify-center items-center">
      <Tabs defaultValue="register">
        <TabsList>
          <TabsTrigger value="register">Registrar</TabsTrigger>
          <TabsTrigger value="login">Entrar</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle className="text-dark text-2xl">Registrar</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Input placeholder="Nome de usuário" type="text" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Senha" type="password" />
              <Button className="bg-dark">Criar</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="text-dark text-2xl">Entrar</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Input placeholder="Email" />
              <Input placeholder="Senha" type="password" />
              <Button className="bg-dark" onClick={()=>router.push('/home')}>Entrar</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default page;
