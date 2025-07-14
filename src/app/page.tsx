import Image from "next/image";
import Link from 'next/link';

type FeatureProps = {
  icon: string;
  title: string;
  desc: string;
};

function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div className="bg-white shadow p-6 rounded-xl text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
export default function Home() {
  return (
    <div>
      {/* Hero */} 
      <section className="text-center py-20 bg-white">
        <h1 className="text-4xl font-bold text-gray-800">
          Transforme qualquer texto em aprendizado com{' '}
          <span className="text-blue-500">IA</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Faça upload de PDFs ou textos, receba resumos, respostas, flashcards e quizzes gerados por inteligência artificial.
        </p>
        <div className="mt-6">
          <Link
            href="/upload"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Começar agora
          </Link>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">
            Funcionalidades principais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon="📄"
              title="Leitura Inteligente"
              desc="Analise textos ou PDFs com IA, linha por linha."
            />
            <Feature
              icon="🧠"
              title="Resumos e Explicações"
              desc="Receba resumos e explicações com linguagem simples."
            />
            <Feature
              icon="📝"
              title="Quiz e Flashcards"
              desc="Teste o que aprendeu com quizzes e flashcards gerados automaticamente."
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Como funciona?</h2>
        <ol className="max-w-3xl mx-auto space-y-4 text-gray-700 list-decimal list-inside text-base px-4">
          <li>Faça upload de um PDF ou cole seu texto</li>
          <li>A IA lê e gera resumos, flashcards e quizzes</li>
          <li>Estude com perguntas, respostas e explicações simples</li>
          <li>Acompanhe seu progresso e volte quando quiser</li>
        </ol>
      </section>

      {/* Rodapé */}
      <footer className="py-8 text-center text-sm text-gray-400 border-t">
        Feito com ❤️ por Jess | Powered by Next.js, OpenAI e Tailwind CSS
      </footer>
    </div>
  );
}
