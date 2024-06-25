"use client";
import Banner from "@/components/Banner";
import BlogCard from "@/components/Blog/Card";
import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function category() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.query.slug) {
      axios
        .get(`https://api.kargozargomrok.com/api/${router.query.slug}`)
        .then((res) => {
          setData(res.data);
          // setLoading(false);
        });
    }
  }, [router.query.slug]);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
          <Banner />
          <div className="grid grid-cols-4">
            {[...new Array(12)].map(() => (
              <BlogCard isSkeleton />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="flex flex-col gap-10 md:gap-16 px-2.5 md:px-10 py-28 md:py-44">
        <Banner />
        <div className="grid grid-cols-4"></div>
      </div>
    </Layout>
  );
}
