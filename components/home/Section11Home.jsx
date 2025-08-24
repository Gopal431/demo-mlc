import { fetchPublicBlogs } from "@/actions/blogServices";
import ButtonReuse from "../componentsForReuse/ButtonReuse";
import { decodeAndSanitizeHtml } from "../componentsForReuse/Utils/sanitizeHtml";
import Link from "next/link";

const POSTS_PER_PAGE = 3; // Show 9 blogs

export default async function Section11Home() {
    // Fetch first page of blogs (no pagination UI)
    const data = await fetchPublicBlogs({
        pageNumber: 1,
        pageSize: POSTS_PER_PAGE, // Fetch 9 blogs
    });

    if (data.status === "error") {
        return null;
    }

    // Extract posts
    let blogPosts = [];
    if (Array.isArray(data)) {
        blogPosts = data;
    } else if (Array.isArray(data.rows)) {
        blogPosts = data.rows;
    } else if (Array.isArray(data.data)) {
        blogPosts = data.data;
    }

    return (
        <section className="my-11">
            <div className="container text-[#141414]">
                <h2 className="font-bold text-[24px] sm:text-[40px] mb-2 text-center">
                    Explore Our Inspiring Blog Posts
                </h2>
                <h3 className="text-[18px] sm:text-3xl font-medium text-center w-[80%] m-auto mb-10">
                    Unleash your school's potential with insights, tips, and stories from
                    educational experts and fellow school leaders.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blogview/${post.slug}`} className="px-3 block">
                            <div className="cursor-pointer blog-box rounded-md shadow-md relative group h-[500px] overflow-hidden">
                                <div className="h-[200px] overflow-hidden">
                                    <img
                                        src={post?.imageUrl || "/placeholder.svg"}
                                        alt={post.title}
                                        className="w-full h-[200px] object-cover rounded-t-md"
                                    />
                                </div>
                                <div className="p-4 bg-white h-[300px] flex flex-col">
                                    <ul className="flex text-sm text-[#393939] font-semibold mb-2">
                                        <li>
                                            {post.publishedAt &&
                                            !isNaN(Date.parse(post.publishedAt))
                                                ? new Date(post.publishedAt)
                                                      .toISOString()
                                                      .slice(0, 10)
                                                : ""}
                                        </li>
                                        <li className="mx-2 w-[5px] h-[5px] bg-[#393939] rounded-full mt-[7px]"></li>
                                        <li>{post.author}</li>
                                    </ul>
                                    <h4 className="font-semibold text-lg text-[#393939] line-clamp-2 mb-2">
                                        {post.title}
                                    </h4>

                                    <div
                                        className="text-sm text-[#393939] prose prose-sm max-w-none overflow-hidden line-clamp-5"
                                        dangerouslySetInnerHTML={{
                                            __html: decodeAndSanitizeHtml(post.content),
                                        }}
                                    />

                                    {/* <div className="mt-4 flex gap-2">
                                        {post?.tags?.map((item, index) => (
                                            <button
                                                key={index}
                                                className="border border-[#393939] rounded-full px-1 py-1  text-xs text-[#393939]"
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-10">
                    <Link
                        href="/blog-listing"
                        className="bg-[#4A81E8] hover:bg-[#2d5db3] text-white font-semibold px-8 py-3 rounded-full transition"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
}
