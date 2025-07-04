"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const insightItems = [
  {
    image: "/images/insight/ins5.png",
    title: "Suspendisse mattis non leo",
    subtitle:"Suspendisse \n  mattis non leo",
    slug:"suspendisse-mattis-non-leo",
    tags: ["#dropshiping", "#e-commerce"],
    content:
      "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins2.png",
    title: "Cras gravida convallis",
    subtitle:"Suspendisse \n  mattis non leo",
    slug: "cras-gravida-convallis",
    tags: ["#logistics", "#b2b"],
    content:
      "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins3.png",
    title: "Curabitur blandit tempus",
    subtitle:"Suspendisse \n  mattis non leo",
    slug: "curabitur-blandit-tempus",
    tags: ["#digital", "#marketing"],
    content:
      "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins4.png",
      subtitle:"Suspendisse \n  mattis non leo",
    title: "How We Built Our Own CLI for Better \n Application Bootstrapping",
    slug: "aliquam-tincidunt-mauris",
    tags: ["#automation", "#technology"],
    content:
      "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins5.png",
      subtitle:"Suspendisse \n  mattis non leo",
    title: "How We Built Our Own CLI for Better \n Application Bootstrapping",
    slug: "suspendisse-mattis-non-leo-1",
    tags: ["#automation", "#technology"],
    content:
      "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins2.png",
      subtitle:"Suspendisse \n  mattis non leo",
    title: "How We Built Our Own CLI for Better \n Application Bootstrapping",
    slug: "pellentesque-habitant-morbi",
    tags: ["#automation", "#technology"],
    content:
      "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins3.png",
      subtitle:"Suspendisse \n  mattis non leo",
    title: "How We Built Our Own CLI for Better \n Application Bootstrapping",
    slug: "integer-vitae-libero-ac-risus",
    tags: ["#automation", "#technology"],
    content:
      "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
  {
    image: "/images/insight/ins4.png",
      subtitle:"Suspendisse \n  mattis non leo",
    title: "How We Built Our Own CLI for Better \n Application Bootstrapping",
    slug: "vivamus-elementum-semper-nisi",
    tags: ["#automation", "#technology"],
    content:
      "Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat. Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat.Nullam sollicitudin orci sed purus interdum, sed ullamcorper purus venenatis. Suspendisse sit amet lectus sapien.Proin pretium, magna ut consequat rhoncus, lectus nisl feugiat ligula, vel ornare ligula risus a ligula. Vestibulum ac erat",
  },
];

const InsightDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const selectedItem = insightItems.find((item) => item.slug === slug);

  if (!selectedItem) {
    return <p className="text-center py-20">Not Found</p>;
  }

  return (
    <div className="w-full bg-white">
      <div className="lg:bg-[url('/icons/content/insightDetail.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 flex flex-col lg:absolute lg:top-[130px] w-full ">
            <div>
              <Link
                href="/insight"
                className="inline-block  text-[#065AF1] text-sm font-medium border border-[#065AF1] px-4 py-2 rounded-full"
              >
                ← Back to Insight
              </Link>
            </div>
            <h2 className="whitespace-pre-line text-black font-inter lg:text-[56px] text-[36px]  not-italic font-semibold leading-[122%] mt-[20px]">
              {selectedItem.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:mt-[100px] mt-[50px] mb-[200px] flex flex-col items-center text-center ">
        <div className="w-full max-w-[1300px] flex flex-col items-center px-4 lg:px-0">
          <div className="lg:w-[1016px] lg:h-[564px] w-[361px] h-[200px] relative rounded-xl mb-[50px]">
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              sizes="(min-width: 1024px) 1016px, 100vw"
              className="object-cover lg:rounded-2xl rounded-4xl px-1 lg:px-0"
            />
          </div>

          <p className=" w-full max-w-[1016px] text-left text-black font-inter text-[18px] font-normal leading-[160%] ">
            {selectedItem.content}
          </p>
          <div className="w-full h-[1px] max-w-[1260px] bg-[rgba(0,0,0,0.08)] my-[100px] "></div>
          <div className="w-full ">
            <h2 className="text-left px-5 mb-[30px] text-[36px] font-semibold leading-[132%] text-black">
              You may also like
            </h2>
          </div>
       <Swiper

  slidesPerView={"auto"}
  className="w-full"
  breakpoints={{
   640: {
      spaceBetween: 0,
    },
    768: {
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      allowTouchMove: false,
      spaceBetween: 24,
    },
  
  }}
  allowTouchMove={true}
>
  {[...Array(5)].map((_, i) => (
    <SwiperSlide key={i} style={{ width: "auto", }} className="flex">
      <div className="w-[288px] h-[350px] rounded-2xl p-1.5 overflow-hidden shadow-xl bg-black text-white flex flex-col">
        <div className="relative w-full h-full">
          <Image
            src="/images/insight/insight.png"
            alt="Warehouse"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-end h-full pl-5">
          <h3 className="text-[20px] leading-[1.2] text-white font-normal mb-[10px]">
            Suspendisse <br /> mattis non leo
          </h3>

          <div className="flex gap-[10px] mb-[15px]">
            <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
              #dropshiping
            </span>
            <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
              #e-commerce
            </span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>
    </div>
  );
};

export default InsightDetailPage;
