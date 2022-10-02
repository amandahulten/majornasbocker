import Head from "next/head";
import Image from "next/image";
import Instagram from "../components/Instagram";
import getInstaImages from "../queries/getInstaImages";
import Link from "next/link";
import Arrow from "../components/svgs/Arrow";

export const About = ({ feed }) => {
  console.log(feed);
  return (
    <div>
      <Head>
        <title>Om oss</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <h1>OM OSS</h1>
        <div className="md:hidden">
          <Image
            src="/about-book.png"
            width="343"
            layout="responsive"
            height="226"
            alt="books"
          ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-7 gap-4">
          <div className="md:row-span-2 md:col-start-1 md:col-span-2 md:row-start-1 w-full bg-temp-päron text-black-coffee p-4 lg:p-8">
            <p className="font-bold lg:hidden mb-4">
              Oberoende bokhandel med med härligt kaffehäng!
            </p>
            <p className="font-bold hidden lg:block mb-4">
              Majornas böcker & kaffe är en oberoende bokhandel som öppnade
              sommaren 2019.
            </p>
            <p>
              Majornas böcker & kaffe är en oberoende bokhandel som öppnade
              sommaren 2019. Här finner du aktuell skönlitteratur, barnböcker,
              serieböcker och intressanta fackböcker. Förutom böcker säljs också
              kort, pussel och spel samt en del pappersvaror och roliga
              presenter. På barnavdelningen hittar man förutom böcker småprylar
              som är perfekta som kalaspresenter.
            </p>
            <p className="hidden lg:block mt-4">
              Tanken är att erbjuda en trivsam bokhandel där man kan botanisera
              bland böcker, eller slå sig ner med en espresso och dagstidningen.
            </p>
          </div>

          <div className="relative md:col-start-1 md:row-span-6 md:row-start-3 hidden md:block md:pr-4 md:mb-4">
            <Image
              src="/about-book-2.png"
              layout="fill"
              objectFit="cover"
              alt="books"
            ></Image>
          </div>
          <div className="md:row-span-4 md:col-start-2 md:row-start-3 bg-temp-ey font-serif text-[56px] md:text-[32px] text-hembakad leading-none p-4">
            ALLTID HEMBAKAD FIKA TILL KAFFET
            <div className="w-full text-center">
              <Image
                src="/muffin-spoon.svg"
                width="231"
                height="218"
                alt="muffin and spoon"
              ></Image>
            </div>
          </div>
          <div className="md:row-span-1 md:row-start-7 md:col-start-2 bg-tumbleweed p-4 flex justify-center">
            <div className="mr-4">
              <Link href="/kontakt">
                <a className="text-lg underline font-courier-prime">
                  Hitta hit
                </a>
              </Link>
            </div>
            <Arrow color="#000" />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 ">
          <div className="bg-black-coffee text-whiteish p-4 mt-4 md:mt-0 lg:p-8">
            <p className="mb-2 lg:text-[26px] md:text-lg font-semibold lg:mb-6">
              Eva Wadman{" "}
              <span className="hidden md:inline">
                är Majornas Bokhandel & Kaffe
              </span>
            </p>
            <p>
              Eva Wadman har alltid älskat litteraturens fascinerande värld. Den
              förälskelsen växte sig så stark att 2019 öppnade hon sin egna
              bokhandel i hjärtat av Majorna.
            </p>
            <p className="hidden lg:block pt-4">
              Här finner du aktuell skönlitteratur, barnböcker, serieböcker och
              intressanta fackböcker. Förutom böcker säljs också kort, pussel
              och spel samt en del pappersvaror och roliga presenter. På
              barnavdelningen hittar man förutom böcker småprylar som är
              perfekta som kalaspresenter.
            </p>
          </div>
          <div className="md:hidden">
            <Image
              src="/about-eva.png"
              layout="responsive"
              width="343"
              height="402"
              alt="author"
            ></Image>
          </div>
          <div className="hidden md:block">
            <Image
              src="/about-eva-2.png"
              layout="responsive"
              width="400"
              height="290"
              alt="author"
            ></Image>
          </div>
        </div>
        <div className="mt-4 mb-4">Instagram</div>
        <Instagram feed={feed}></Instagram>

        <div className="pb-12">
          <p className="text-right">Följ Oss</p>
        </div>
      </div>
    </div>
  );
};

export default About;

export const getStaticProps = async () => {
  const feed = await getInstaImages();
  console.log(feed);

  return {
    props: {
      feed,
    },
  };
};