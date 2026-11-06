import express from "express";
import cors from "cors";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const app = express();
const execFileAsync = promisify(execFile);
const port = Number(process.env.PORT ?? 4317);
const host = process.env.HOST ?? "127.0.0.1";

app.use(cors({ origin: false }));
app.use(express.json({ limit: "32kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "smart-tv-manager", mode: "read-only-prototype" });
});

app.get("/api/adb/status", async (_req, res) => {
  try {
    const { stdout } = await execFileAsync("adb", ["version"], { timeout: 4000 });
    res.json({ available: true, version: stdout.split("\\n")[0] });
  } catch {
    res.json({ available: false, message: "ADB no está instalado o no se encuentra en PATH." });
  }
});

app.get("/api/devices", async (_req, res) => {
  try {
    const { stdout } = await execFileAsync("adb", ["devices"], { timeout: 5000 });
    const devices = stdout.split("\\n").slice(1).map(line => line.trim()).filter(Boolean)
      .map(line => {
        const [serial, state] = line.split(/\\s+/);
        return { serial, state };
      });
    res.json({ devices });
  } catch {
    res.status(503).json({ error: "No se pudo consultar ADB. Comprueba que esté instalado." });
  }
});

// Intencionadamente no hay endpoint de desinstalación en este prototipo.
app.listen(port, host, () => {
  console.log(`Smart TV Manager API disponible en http://${host}:${port}`);
});
