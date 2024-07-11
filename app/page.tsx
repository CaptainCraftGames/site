import { Boogaloo } from "next/font/google";
import Coin from "./components/coin";

const boogaloo = Boogaloo({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-green-200 to-yellow-200">
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-yellow-300 via-red-600 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Captain Craft Games <br />
              <br />
              <span className={boogaloo.className}> We make games.</span>
              <div className="mt-2">
                <Coin />
              </div>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
