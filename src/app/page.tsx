"use client";
import { NextUIProvider, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="min-h-screen">
        <h1>hello world</h1>
        <Button color="primary" radius="sm">
          hello world
        </Button>
      </main>
    </NextUIProvider>
  );
}
