import ftp from "basic-ftp";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false,
    });

    const localPath = path.join(__dirname, "out");
    const remotePath = "/"; // 

    await client.ensureDir(remotePath);
    await client.cd(remotePath);
    await client.clearWorkingDir();

    await client.uploadFromDir(localPath);

    console.log("✅ Deployment successful!");
  } catch (err) {
    console.error("❌ Deployment failed:", err);
  }

  client.close();
}

deploy();
