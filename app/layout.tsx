import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Pairumani",
  description:
    "El Hotel Pairumani te ofrece paquetes personalizados con habitaciones confortables, desayuno, almuerzo y cena adaptados a tus gustos. Disfruta de nuestra piscina, sauna seco, vapor, comedor, aire acondicionado y WiFi gratuito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
