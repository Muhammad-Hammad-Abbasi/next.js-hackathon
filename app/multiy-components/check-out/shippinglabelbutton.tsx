// app/checkout/components/ShippingLabelButton.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ShippingLabelButton() {
  const [isLoading, setIsLoading] = useState(false);

  const createShippingLabel = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch("/api/shipengine/create-label", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          rateId: "se-28529731", // Demo ID - Replace with dynamic value
          testMode: true // Remove for production
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Shipping Label Created:", data);
      
      // PDF label download karne ke liye
      window.open(data.label_download.url, "_blank");

    } catch (error) {
      console.error("Label Creation Failed:", error);
      alert("Shipping label creation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={createShippingLabel}
      disabled={isLoading}
      className="bg-blue-600 hover:bg-blue-700 text-white"
    >
      {isLoading ? "Creating Label..." : "Create Shipping Label"}
    </Button>
  );
}