import React from "react";
import { notFound } from "next/navigation";
import DATA from "@/data/features";
import PageOne from "@/components/feature-landing-pages/page-one";

const Page = async ({ params }) => {
  const { slug } = await params;
  const parsedFeature = DATA[slug];

  if (!parsedFeature) {
    return notFound();
  }



  return (
    <PageOne parsedFeature={parsedFeature}/>
  );
};

export default Page;
