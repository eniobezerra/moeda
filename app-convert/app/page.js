import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-3xl font-bold">Conversor Inteligente</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 shadow-md rounded-lg max-w-lg text-center">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-4">
            Bem-vindo ao Conversor Inteligente!
          </h2>
          <p className="text-gray-600 mb-6">
            Este aplicativo oferece várias ferramentas de conversão para
            facilitar sua vida. Escolha uma das opções abaixo:
          </p>
          <nav className="flex flex-col gap-4">

            
            <Link
  href="/sobre"
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
>
  Sobre
</Link>
            <Link
  href="/dolar"
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
>
  Conversor de Dolar
</Link>
            <Link
  href="/temperatura"
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
>
  Converso de Temperatura
</Link>
            <Link
  href="/metros"
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
>
  Conversor de medidas
</Link>
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4">
        <p className="text-gray-600 text-sm">
          Desenvolvido com ❤ usando Next.js e Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}