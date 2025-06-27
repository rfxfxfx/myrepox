import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const patientRouter = express.Router();

// POST /api/patients — Add new patient
patientRouter.post("/", async (req, res) => {
  try {
    const { name, birthday, address, age, gender, contactNumber } = req.body;

    const newPatient = await prisma.patient.create({
      data: {
        name,
        birthday: new Date(birthday),
        address,
        age,
        gender,
        contactNumber,
        dateToday: new Date()
      }
    });

    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: "Failed to add patient" });
  }
});

// GET /api/patients — Fetch all patients
patientRouter.get("/", async (_req, res) => {
  try {
    const patients = await prisma.patient.findMany({
      orderBy: { id: "desc" } // Optional: newest first
    });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch patients" });
  }
});
