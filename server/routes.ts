import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  // Handle static files for production
  if (process.env.NODE_ENV === "production") {
    app.get("/*", (req, res) => {
      res.sendFile(path.resolve("dist/public/index.html"));
    });
  }

  const httpServer = createServer(app);
  return httpServer;
}
