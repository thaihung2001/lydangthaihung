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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResource = exports.updateResource = exports.getResourceById = exports.getAllResources = exports.createResource = void 0;
const resource_model_1 = require("../models/resource.model");
// create new item
const createResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        // check input data
        if (!name || !description) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        // insert database
        const newResource = yield resource_model_1.Resource.create({ name, description });
        res.status(201).json({ message: "Resource created!", data: newResource });
    }
    catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Error creating resource" });
    }
});
exports.createResource = createResource;
// get items 
const getAllResources = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resources = yield resource_model_1.Resource.findAll();
        res.json(resources);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching resources" });
    }
});
exports.getAllResources = getAllResources;
// get detail item
const getResourceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resource = yield resource_model_1.Resource.findByPk(req.params.id);
        resource ? res.json(resource) : res.status(404).json({ error: "Resource not found" });
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching resource" });
    }
});
exports.getResourceById = getResourceById;
// update item
const updateResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resource = yield resource_model_1.Resource.findByPk(req.params.id);
        if (!resource)
            return res.status(404).json({ error: "Resource not found" });
        yield resource.update(req.body);
        res.json(resource);
    }
    catch (error) {
        res.status(500).json({ error: "Error updating resource" });
    }
});
exports.updateResource = updateResource;
// delete item
const deleteResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield resource_model_1.Resource.destroy({ where: { id: req.params.id } });
        res.json({ message: "Resource deleted" });
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting resource" });
    }
});
exports.deleteResource = deleteResource;
