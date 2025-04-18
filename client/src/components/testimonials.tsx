import { useLanguage } from "@/context/language-context";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

function Testimonial({ quote, name, role, image }: TestimonialProps) {
  return (
    <div className="glass rounded-xl p-6">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <blockquote className="mb-4 italic text-dark-300">
        {quote}
      </blockquote>
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src={image} alt={name} />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-dark-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.1.quote"),
      name: t("testimonials.1.name"),
      role: t("testimonials.1.role"),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: t("testimonials.2.quote"),
      name: t("testimonials.2.name"),
      role: t("testimonials.2.role"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: t("testimonials.3.quote"),
      name: t("testimonials.3.name"),
      role: t("testimonials.3.role"),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
