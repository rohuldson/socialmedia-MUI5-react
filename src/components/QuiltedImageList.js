import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      /*  sx={{ width: 500, height: 450 }} */
      variant="quilted"
      cols={4}
      rowHeight={100}
      gap={5}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

/* 
https://media3.giphy.com/media/l3vQWOexIlHHKpbk4/giphy.gif

https://cdn.dribbble.com/users/798777/screenshots/3824235/steamlab_follower_dribbble.gif

https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8e97ed54695375.596e6a9874dea.gif

https://data.whicdn.com/images/62807819/original.gif

https://i.pinimg.com/originals/d8/2b/f8/d82bf888a5aa6c60548ee8cc70313d5c.gif

*/
const itemData = [
  {
    img: "https://i.pinimg.com/originals/d8/2b/f8/d82bf888a5aa6c60548ee8cc70313d5c.gif",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/originals/52/55/56/525556d83f04c1698d6215ca7ae41041.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/236x/b9/e6/2e/b9e62e28a994914c0c79b824459a3e62--rock-chick-style-photoshoot-ideas.jpg",
    title: "Camera",
  },
  {
    img: "https://musictech.com/wp-content/uploads/2019/02/how-to-create-a-rock-sound-guide-header@1400x1050.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "http://fc01.deviantart.net/fs70/i/2013/164/7/7/punk_rock_girl_3_by_enolla-d68vqij.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/236x/1b/6a/56/1b6a56ae847f1d399df21fe1aa9a9224--jac-jagaciak-monika-jagaciak.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/474x/fc/70/25/fc7025e523340aee399ebbe7793f22af--pop-art-fashion-yellow-fashion.jpg",
    title: "Basketball",
  },
  {
    img: "https://data.whicdn.com/images/62807819/original.gif",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/474x/aa/be/e1/aabee104582747656abc220bfb3bf59f--color-blocking-block-color.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://media3.giphy.com/media/l3vQWOexIlHHKpbk4/giphy.gif",
    title: "Tomato basil",
  },
  {
    img: "https://cdn.fstoppers.com/styles/full/s3/photos/2016/10/8631eed062dda5ab230a606a0d6c7da4.jpg?itok=od6kBzPB",
    title: "Sea star",
  },
  {
    img: "https://cdn.dribbble.com/users/798777/screenshots/3824235/steamlab_follower_dribbble.gif",
    title: "Bike",
    cols: 2,
  },
];
