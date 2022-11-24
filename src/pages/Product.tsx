import { motion } from "framer-motion";

import landScape from "../assets/images/landscape.jpg";

const Product = () => {
  return (
    <motion.div exit={{}}>
      <motion.img
        alt="product"
        src={landScape}
        className="h-96 w-full object-cover"
        layoutId="product"
      />
      <div>
        <p className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          recusandae quia deserunt optio ducimus voluptas a nesciunt quas quidem
          molestiae eligendi asperiores laboriosam. Cum nulla unde delectus,
          dolor natus ad. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Doloremque, dolores itaque! Ex rerum ea incidunt dolorum
          consectetur aut sapiente reprehenderit, dolores itaque, laudantium
          nemo beatae odit ratione quaerat illum! Dolore debitis ipsa deserunt,
          quaerat suscipit rerum quae nulla similique repellat repudiandae porro
          dolorem, magnam quibusdam ea beatae nemo autem. Laudantium impedit
          sunt blanditiis eius incidunt atque vel debitis nihil, aspernatur ut
          harum. Dolor dignissimos voluptate voluptatum praesentium tenetur, qui
          recusandae in dicta nulla consequatur ab placeat ex, perspiciatis quam
          eveniet vero quo? Illum atque quam fugiat quis sapiente velit quasi
          voluptatum? Optio, totam. Cupiditate reiciendis necessitatibus atque,
          pariatur dignissimos error!
        </p>
      </div>
    </motion.div>
  );
};

export default Product;
