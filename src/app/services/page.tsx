import BlogsCard from "@/components/blogs/BlogsCard";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { blogs } from "@/data/blogs";

export default function PackagesPage() {
  return (
    <div className="flex flex-col gap-20 min-h-screen pt-19.5 lg:pt-21.75">
      <div className="my-20 flex flex-col gap-20">
        {blogs
          .filter((blog) => blog.isFeatured)
          .map((blog) => (
            <div key={blog.id} className="flex flex-col">
              <Container className="flex flex-col gap-5 md:gap-6 px-4 sm:px-6 xl:px-0">
                <SectionHeader
                  title={blog.title}
                  subtitle={blog.description}
                  btnLabel="See All"
                />
                <BlogsCard
                  price={blog.price}
                  description={blog.description}
                  gallery={blog.gallery}
                  image={blog.image}
                />
              </Container>
            </div>
          ))}
      </div>
    </div>
  );
}
