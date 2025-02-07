import { Shipengine } from "@/lib/helper/shipEngine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    console.log("🛠️ Received Request Body:", JSON.stringify(body, null, 2));

    if (!body.rateId) {
      return NextResponse.json({ error: "rateId is required" }, { status: 400 });
    }

    const label = await Shipengine.createLabelFromRate(body);

    console.log("✅ ShipEngine Label Response:", JSON.stringify(label, null, 2));
    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    console.error("❌ Error creating label:", error);
    return NextResponse.json({ error: "An error occurred while creating the label" }, { status: 500 });
  }
}