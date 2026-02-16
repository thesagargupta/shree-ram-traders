import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock reviews data - Replace with Google Places API data
const reviews = [
    {
    id: 1,
    name: "Sagar Gupta",
    role: "Customer",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJmlfqqkMo9Ri_67nEZsRq6vrB7zHM56cSH6ze13BfrSluVL5ikvg=w45-h45-p-rp-mo-br100",
    rating: 5,
    review: "Excellent service and genuine products! The Sona Masoori rice is perfect for our daily meals. My family has been buying from them for years, and we've never been disappointed.",
    date: "1 month ago"
  },
  {
    id: 2,
    name: "ALI ASGAR",
    role: "Wholesale Buyer",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXINtEN_mogSmtMZmEKy7EJ5ei3vXbBiRC7W8eimc8y5QlhdF5n=w45-h45-p-rp-mo-br100",
    rating: 5,
    review: "Good product.. At very good rate",
    date: "1 month ago"
  },

  {
    id: 3,
    name: "Bablu Kushwaha",
    role: "Local Customer",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUYRc-DSPWf7mkT15ipLEKS-OrwnskKovxA8Hjs2gZH3q6JBJabgw=w45-h45-p-rp-mo-ba2-br100",
    rating: 5,
    review: "Best Shop In The Area.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Aman Kushwaha",
    role: "Local Customer",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUHY4j7T-EoqfqsR_HxHlaHvOmi5VtUYMPname0hfRE3jsFhTloug=w45-h45-p-rp-mo-br100",
    rating: 5,
    review: "Best rice shop in Raxaul! The staff is very helpful and the prices are reasonable. I especially love their long-grain rice. Highly recommended!",
    date: "1 week ago"
  },
    {
    id: 5,
    name: "Sunita Devi",
    role: "Local Customer",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX78c012345678901234567890123456789012345678901234567890123=w45-h45-p-rp-mo-br100",
    rating: 5,
    review: "Best rice shop in Raxaul! The staff is very helpful and the prices are reasonable. I especially love their long-grain rice. Highly recommended!",
    date: "1 week ago"
  },
  {
    id: 6,
    name: "Mohammad Ansari",
    role: "Hotel Manager",
    image: "",
    rating: 5,
    review: "Premium quality for our hotel needs! We order resort rice in bulk and it never disappoints. Great taste, perfect texture, and excellent customer service.",
    date: "2 months ago"
  },
  {
    id: 7,
    name: "Kavita Singh",
    role: "Regular Customer",
    image: "",
    rating: 5,
    review: "Trustworthy and honest dealers! Been purchasing from Shree Ram Traders for years. Their basmati rice is aromatic and always fresh. Family-run business with great values.",
    date: "3 days ago"
  }
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Get indices for 3D carousel display
  const getVisibleReviews = () => {
    const prev = activeIndex === 0 ? reviews.length - 1 : activeIndex - 1;
    const next = (activeIndex + 1) % reviews.length;
    return { prev, current: activeIndex, next };
  };

  const visibleIndices = getVisibleReviews();

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5s
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Calculate average rating
  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="section-padding bg-gradient-to-br from-cream/20 via-background to-secondary/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-pattern-rice opacity-30" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-up">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Trusted by thousands of customers across Raxaul and beyond
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 animate-fade-up delay-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-gold text-gold"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gradient-gold">{averageRating}</span>
            <span className="text-muted-foreground">({reviews.length} reviews)</span>
          </div>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[500px] md:h-[550px] perspective-[2000px] animate-fade-up delay-200">
          <div className="relative w-full h-full flex items-center justify-center">
            {reviews.map((review, index) => {
              let transformClass = "";
              let zIndexClass = "";
              let opacityClass = "";
              let pointerClass = "pointer-events-none";

              if (index === visibleIndices.current) {
                // Center card
                transformClass = "translate-x-0 scale-110 rotateY-0";
                zIndexClass = "z-30";
                opacityClass = "opacity-100";
                pointerClass = "pointer-events-auto";
              } else if (index === visibleIndices.prev) {
                // Left card
                transformClass = "-translate-x-[280px] md:-translate-x-[350px] scale-90 -rotateY-[25deg]";
                zIndexClass = "z-20";
                opacityClass = "opacity-60";
                pointerClass = "pointer-events-auto";
              } else if (index === visibleIndices.next) {
                // Right card
                transformClass = "translate-x-[280px] md:translate-x-[350px] scale-90 rotateY-[25deg]";
                zIndexClass = "z-20";
                opacityClass = "opacity-60";
                pointerClass = "pointer-events-auto";
              } else {
                // Hidden cards
                transformClass = "translate-x-0 scale-75 rotateY-0";
                zIndexClass = "z-0";
                opacityClass = "opacity-0";
              }

              return (
                <div
                  key={review.id}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            transition-all duration-700 ease-out-expo preserve-3d
                            ${transformClass} ${zIndexClass} ${opacityClass} ${pointerClass}
                            w-[280px] sm:w-[320px] md:w-[400px] cursor-pointer`}
                  onClick={() => handleCardClick(index)}
                  style={{
                    transform: `translate(-50%, -50%) ${
                      index === visibleIndices.prev
                        ? "translateX(-280px) scale(0.9) rotateY(-25deg)"
                        : index === visibleIndices.next
                        ? "translateX(280px) scale(0.9) rotateY(25deg)"
                        : index === visibleIndices.current
                        ? "translateX(0) scale(1.1) rotateY(0deg)"
                        : "translateX(0) scale(0.75) rotateY(0deg)"
                    }`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Card
                    className={`backdrop-blur-md border-2 shadow-2xl overflow-hidden 
                              transition-all duration-500 h-full
                              ${
                                index === visibleIndices.current
                                  ? "bg-gradient-to-br from-white via-cream/50 to-white border-gold shadow-gold"
                                  : "bg-white/80 border-border hover:border-gold/50"
                              }`}
                  >
                    <CardContent className="p-6 md:p-8 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-10 h-10 text-gold/30" />
                      </div>

                      {/* Review Text */}
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                        "{review.review}"
                      </p>

                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-gold text-gold"
                          />
                        ))}
                      </div>

                      {/* Reviewer Info */}
                      <div className="flex items-center gap-4 border-t border-border/50 pt-4">
                        <Avatar className="h-12 w-12 border-2 border-gold/30">
                          <AvatarImage src={review.image} alt={review.name} />
                          <AvatarFallback className="bg-gradient-to-br from-accent/20 to-gold/20 text-accent font-semibold">
                            {getInitials(review.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm md:text-base">
                            {review.name}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            {review.role}
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {review.date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-12 animate-fade-up delay-300">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`transition-all duration-300 rounded-full
                        ${
                          index === activeIndex
                            ? "w-8 h-2 bg-gradient-to-r from-accent to-gold"
                            : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                        }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up delay-400">
          <p className="text-muted-foreground mb-4">
            Join our satisfied customers today!
          </p>
          <a
            href="#contact"
            className="btn-gold hover:shadow-gold inline-flex items-center gap-2"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
