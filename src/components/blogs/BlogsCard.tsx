import Image from "next/image";

type GalleryItem = {
  title: string;
  image: string;
};

type BlogsCardProps = {
  price: number;
  description?: string;
  gallery?: GalleryItem[];
  image?: string;
};

export default function BlogsCard({
  price,
  description,
  gallery,
  image,
}: BlogsCardProps) {
  const backgroundImage = image;

  const hasGallery = gallery && gallery.length > 0;

  return (
    <div className="flex flex-col gap-4 lg:flex-row w-full lg:gap-6">
      {/* Left content */}
      <div
        className={`relative flex flex-col justify-between overflow-hidden rounded-[20px] p-4 sm:p-5 lg:flex-[1.05] lg:p-6 ${
          hasGallery ? "min-h-80 lg:min-h-106" : "min-h-175"
        }`}
      >
        {/* Background image */}
        {backgroundImage && (
          <Image src={backgroundImage} alt="" fill className="object-cover" />
        )}

        {hasGallery && (
          <>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 w-full">
              <p className="text-[14px] text-white">{description}</p>
            </div>
          </>
        )}
      </div>

      {/* Gallery */}
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {gallery?.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="relative h-37.5 sm:h-40 lg:h-72 overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
