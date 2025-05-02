import connectDB from "@/lib/db";
import Project from "@/lib/models/Projects";
import { NextResponse } from "next/server";

export  async function GET() {
    await connectDB();
    const data = await Project.find();
    return NextResponse.json({ data });
}