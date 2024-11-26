import { exec } from "child_process";

export async function POST(req) {
  try {
    const { features } = await req.json();

    return new Promise((resolve, reject) => {
      exec(
        `python3 scripts/predict.py '${JSON.stringify(features)}'`,
        (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${stderr}`);
            reject(new Response("Error al ejecutar el script", { status: 500 }));
          }
          const prediction = stdout.trim();
          resolve(new Response(JSON.stringify({ prediccion: prediction }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }));
        }
      );
    });
  } catch (error) {
    console.error(error);
    return new Response("Error interno del servidor", { status: 500 });
  }
}
