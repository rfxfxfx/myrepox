import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const patientRouter = express.Router();

// Create new patient
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

// Get all patients with pagination and search
patientRouter.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const search = (req.query.search as string) || "";

    const patients = await prisma.patient.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive"
        }
      },
      orderBy: { id: "desc" },
      take: 20,
      skip: (page - 1) * 20
    });

    const totalCount = await prisma.patient.count({
      where: {
        name: {
          contains: search,
          mode: "insensitive"
        }
      }
    });

    res.json({ patients, totalCount });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch patients" });
  }
});

// Update a patient
patientRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, birthday, address, age, gender, contactNumber } = req.body;

    const updated = await prisma.patient.update({
      where: { id: parseInt(id) },
      data: {
        name,
        birthday: new Date(birthday),
        address,
        age,
        gender,
        contactNumber
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update patient" });
  }
});

// Delete a patient
patientRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.patient.delete({
      where: { id: parseInt(id) }
    });

    res.status(204).end(); // No content
  } catch (error) {
    res.status(500).json({ error: "Failed to delete patient" });
  }
});
