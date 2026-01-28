import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import { Calendar, User, ArrowRight, Share2 } from "lucide-react";
import blogHeroImage from "@/assets/blog-hero.jpg";
import PageTransition from "@/components/PageTransition";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tutte");

  const filteredPosts = selectedCategory === "Tutte" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleShare = (post: typeof blogPosts[0]) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `/blog/${post.slug}`
      });
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Blog | Townly - Esperienze in Emilia-Romagna</title>
        <meta name="description" content="Scopri guide, consigli e ispirazioni per vivere l'Emilia-Romagna. Articoli su enogastronomia, cultura, natura e attività outdoor nella Food Valley italiana." />
        <meta property="og:title" content="Blog | Townly - Esperienze in Emilia-Romagna" />
        <meta property="og:description" content="Scopri guide, consigli e ispirazioni per vivere l'Emilia-Romagna." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={blogHeroImage} />
        <link rel="canonical" href="https://townly.it/blog" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={blogHeroImage} 
            alt="Paesaggio dell'Emilia-Romagna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' }}>
                Blog Townly
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)' }}>
                Guide, consigli e ispirazioni per scoprire l'Emilia-Romagna
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-grow py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all hover:scale-105"
                  size="lg"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="h-full flex flex-col hover:shadow-glow transition-all duration-300 overflow-hidden">
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
                          {post.category}
                        </Badge>
                      </div>
                    </Link>
                    
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedAt).toLocaleDateString('it-IT', { 
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                      </div>
                      
                      <Link to={`/blog/${post.slug}`}>
                        <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {post.title}
                        </CardTitle>
                      </Link>
                      
                      <CardDescription className="line-clamp-3 text-base leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0 mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <Link to={`/blog/${post.slug}`} className="flex-1">
                          <Button variant="ghost" className="group/btn w-full justify-start hover:bg-primary/10">
                            Leggi di più
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleShare(post)}
                          aria-label="Condividi articolo"
                          className="hover:bg-primary/10 hover:text-primary"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <section className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center text-white shadow-glow">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Vivi l'Emilia-Romagna
              </h2>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Scopri le nostre esperienze autentiche e prenota la tua prossima avventura
              </p>
              <Link to="/esperienze">
                <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                  Esplora le Esperienze
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
