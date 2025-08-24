import Link from "next/link";
import { decode } from "he";
import { fetchBlogsById ,fetchBlogsBySlug} from "@/actions/blogServices";
import { decodeAndSanitizeHtml } from "../../../components/componentsForReuse/Utils/sanitizeHtml";
import "./style.css";
import MoreBlogs from "@/components/blogs/MoreBlogs";
export default async function Page({ params }) {
  const { id } = await params;
  const blog = await fetchBlogsBySlug(id);
  console.log(blog);

  if (blog.status === "error") {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold text-red-500">
        {blog.message || "Something went wrong!"}
      </div>
    );
  }


  return (
    <div>
      {/* Back Button */}
      <div className="max-w-screen-lg pl-5 pt-28 ">
        <Link
          href="/blog-listing"
          className="inline-block mb-6 px-4 py-2 rounded bg-[#5C4EF8] text-white transition"
        >
          ← Back to Blogs
        </Link>
      </div>
      <main>
        <article>
          <header className="mx-auto mt-32 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            {/* <p className="text-gray-500">
              Published{" "}
              {blog?.publishedAt && !isNaN(Date.parse(blog.publishedAt))
                ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""}
            </p> */}
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              {blog?.title}
            </h1>
            <p className="mt-6 text-lg text-gray-700">{"Sagar"}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {blog?.tags?.map((keyword, index) => (
                <button
                  key={index}
                  className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200"
                >
                  {keyword}
                </button>
              ))}
            </div>
            <img
              className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src={blog?.imageUrl}
              alt=""
            />
          </header>

          <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: decode(blog?.content || ""),
              }}
            />
          </div>
        </article>
      </main>

      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600"></div>
        <div className="h-0.5 w-32 bg-gray-600"></div>
        <div className="h-0.5 w-2 bg-gray-600"></div>
      </div>

      <aside
        aria-label="Recent Posts"
        className="mx-auto mt-10 max-w-screen-xl "
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 mb-10 md:mb-16">
          <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
            More Recent Posts
          </h2>
        </div>
      </aside>
      <MoreBlogs fetchBlogsBySlug={id} />
    </div>
  );
}
