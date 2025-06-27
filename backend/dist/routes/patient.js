"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientRouter = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.patientRouter = express_1.default.Router();
// POST /api/patients — Add new patient
exports.patientRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, birthday, address, age, gender, contactNumber } = req.body;
        const newPatient = yield prisma.patient.create({
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
    }
    catch (error) {
        res.status(500).json({ error: "Failed to add patient" });
    }
}));
// GET /api/patients — Fetch all patients
exports.patientRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patients = yield prisma.patient.findMany({
            orderBy: { id: "desc" } // Optional: newest first
        });
        res.json(patients);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch patients" });
    }
}));
