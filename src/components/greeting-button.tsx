"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function GreetingButton() {
  const [greeting, setGreeting] = useState("");

  const handleClick = () => {
    const hour = new Date().getHours();
    let message = "Good ";

    if (hour < 12) message += "Morning";
    else if (hour < 18) message += "Afternoon";
    else message += "Evening";

    setGreeting(message);
  };

  return (
    <div className="text-center">
      <Button onClick={handleClick} className="mb-4">
        Show Greeting
      </Button>
      {greeting && <p className="text-lg">{greeting}!</p>}
    </div>
  );
}
