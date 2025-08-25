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
      <div className="max-w-screen-lg pl-5 pt-10 md:block hidden">
        <Link
          href="/blog-listing"
          className="inline-block mb-6 px-4 py-2 rounded bg-[#5C4EF8] text-white transition"
        >
          ← Back to Blogs
        </Link>
      </div>
       <div className="max-w-screen-lg pl-5 pt-5 md:hidden block">
        <Link
          href="/blog-listing"
          className="inline-block mb-6 px-2 py-o.5 rounded bg-[#5C4EF8] text-white transition"
        >
          ← 
        </Link>
      </div>
      <main>
        <article>
          <header className="mx-auto mt-32 max-w-screen-lg rounded-t-lg bg-white pt-5 md:pt-16 text-center shadow-lg">
            <h1 className="mt-2 md:text-4xl text-lg font-bold text-gray-900 sm:text-5xl px-2">
              {blog?.title}
            </h1>
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

          <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white md:px-8 px-2 md:pt-10 pt-2 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
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
