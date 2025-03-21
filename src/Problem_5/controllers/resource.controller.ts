import { Request, Response } from "express";
import { Resource } from "../models/resource.model";

// create new item
export const createResource = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;

        // check input data
        if (!name || !description) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // insert database
        const newResource = await Resource.create({ name, description });

        res.status(201).json({ message: "Resource created!", data: newResource });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Error creating resource" });
    }
};

// get items 
export const getAllResources = async (_req: Request, res: Response) => {
    try {
        const resources = await Resource.findAll();
        res.json(resources);
    } catch (error) {
        res.status(500).json({ error: "Error fetching resources" });
    }
};

// get detail item
export const getResourceById = async (req: Request, res: Response) => {
    try {
        const resource = await Resource.findByPk(req.params.id);
        resource ? res.json(resource) : res.status(404).json({ error: "Resource not found" });
    } catch (error) {
        res.status(500).json({ error: "Error fetching resource" });
    }
};

// update item
export const updateResource = async (req: Request, res: Response) => {
    try {
        const resource = await Resource.findByPk(req.params.id);
        if (!resource) return res.status(404).json({ error: "Resource not found" });
        await resource.update(req.body);
        res.json(resource);
    } catch (error) {
        res.status(500).json({ error: "Error updating resource" });
    }
};

// delete item
export const deleteResource = async (req: Request, res: Response) => {
    try {
        await Resource.destroy({ where: { id: req.params.id } });
        res.json({ message: "Resource deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting resource" });
    }
};
