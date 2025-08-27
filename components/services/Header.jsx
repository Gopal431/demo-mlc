import Image from "next/image";

export default function Header({ headerData }) {
  const { title, highlight,clgImg, description, imageSrc, imageAlt } =
    headerData || {};

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-gray-100">
      <div className="mx-auto max-w-screen-xl p-4 lg:px-10 py-6 grid lg:grid-flow-col gap-4">
        <div className="text-left lg:text-left self-center grid gap-6">
          <h1 className="max-w-3xl text-left text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug">
            {title}
            {highlight && (
              <span className="block text-blue-600 mt-2">{highlight}</span>
            )}
          </h1>

          {description && (
            <p className="max-w-2xl text-gray-500 sm:text-lg md:text-xl">
              {description}
            </p>
          )}
        </div>
      <div className="flex justify-center lg:justify-end items-center">
          <Image
          src={clgImg}
          alt={imageAlt || "Hero illustration"}
          width={300}
          height={400}
          priority
        />
      </div>
      </div>
    </section>
  );
}
