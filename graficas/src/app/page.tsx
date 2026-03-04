'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
        <div className="grid gap-8 sm:grid-cols-3 w-full">
          <div
            className="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition"
            onClick={() => router.push('/cantidad-empleados-mes')}
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Gráfico de Barras
            </h2>
            <p className="text-gray-600">
              Cantidad de empleados por mes con un gráfico de barras
            </p>
          </div>

          <div
            className="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition"
            onClick={() => router.push('/cantidad-empleados-puesto')}
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Gráfico Lineal
            </h2>
            <p className="text-gray-600">
              Cantidad de empleados por departamento con un gráfico lineal
            </p>
          </div>

          <div
            className="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow hover:shadow-lg transition"
            onClick={() => router.push('/promedio-salario')}
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Gráfico de Pastel
            </h2>
            <p className="text-gray-600">
              Promedio de salario por departamento con un gráfico de pastel
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
