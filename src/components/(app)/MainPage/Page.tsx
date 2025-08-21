import Image from "next/image";
import React from "react";

const MainPage = () => {
  return (
    <div className="flex justify-between items-center min-h-screen p-4 bg-red-200">
      <div className="bg-green-200 w-full h-full">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error
          quod laboriosam minus atque ad repudiandae provident omnis harum,
          vitae commodi fugiat, a autem quibusdam iusto. Illum, in! Quas nisi
          vero consectetur cupiditate ab quae ut cumque, dicta, totam ipsa nihil
          laborum fugiat, et atque veniam iusto deleniti delectus eum
          exercitationem similique iure ipsum quia. Ex, laborum voluptatum!
          Voluptatum rerum non eum harum quisquam ea illum exercitationem
          dignissimos, minima explicabo amet optio atque inventore doloribus
          nihil eveniet iste dolorum fugit commodi. Mollitia, voluptatem,
          voluptatum culpa, nihil possimus laborum minus eos corrupti ipsam
          numquam quidem perspiciatis optio. Quam molestias aut vitae?
        </p>
      </div>
      <div className="w-full h-full">
        <Image
          src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
          width={500}
          height={500}
          alt="Municipality Building"
        />
      </div>
    </div>
  );
};

export default MainPage;
