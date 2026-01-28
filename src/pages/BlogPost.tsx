import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Articolo non trovato</h1>
            <Link to="/blog">
              <Button>Torna al Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts.filter(p => 
    p.id !== post.id && p.category === post.category
  ).slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(shareUrl);
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.coverImage,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.publishedAt,
    "publisher": {
      "@type": "Organization",
      "name": "Townly",
      "logo": {
        "@type": "ImageObject",
        "url": "https://townly.it/logo.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Townly</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        <link rel="canonical" href={`https://townly.it/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <article>
          <header className="relative h-[60vh] overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto max-w-4xl">
                <Link to="/blog">
                  <Button variant="ghost" className="mb-4 text-foreground hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Torna al Blog
                  </Button>
                </Link>
                
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
                
                <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString('it-IT', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="py-12 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* Article Content */}
                <div className="lg:col-span-3">
                  <div className="prose prose-lg max-w-none mb-12">
                    <div className="text-xl text-muted-foreground mb-8 font-medium">
                      {post.excerpt}
                    </div>
                    
                    <div className="text-foreground leading-relaxed whitespace-pre-line">
                      {post.content}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="my-8" />

                  {/* Share Buttons */}
                  <div className="mb-12">
                    <h3 className="text-lg font-semibold mb-4">Condividi questo articolo</h3>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleShare('facebook')}
                        aria-label="Condividi su Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleShare('twitter')}
                        aria-label="Condividi su Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleShare('linkedin')}
                        aria-label="Condividi su LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({ title: post.title, url: shareUrl });
                          }
                        }}
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        Condividi
                      </Button>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {previousPost && (
                      <Link to={`/blog/${previousPost.slug}`}>
                        <Card className="hover:shadow-glow transition-all h-full">
                          <CardContent className="p-4">
                            <p className="text-sm text-muted-foreground mb-2">← Articolo Precedente</p>
                            <h4 className="font-medium line-clamp-2">{previousPost.title}</h4>
                          </CardContent>
                        </Card>
                      </Link>
                    )}
                    {nextPost && (
                      <Link to={`/blog/${nextPost.slug}`}>
                        <Card className="hover:shadow-glow transition-all h-full">
                          <CardContent className="p-4 text-right">
                            <p className="text-sm text-muted-foreground mb-2">Articolo Successivo →</p>
                            <h4 className="font-medium line-clamp-2">{nextPost.title}</h4>
                          </CardContent>
                        </Card>
                      </Link>
                    )}
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <section>
                      <h2 className="text-2xl font-display font-bold mb-6">Articoli Correlati</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map((relatedPost) => (
                          <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                            <Card className="hover:shadow-glow transition-all h-full">
                              <div className="relative h-40 overflow-hidden">
                                <img 
                                  src={relatedPost.coverImage} 
                                  alt={relatedPost.title}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <CardHeader>
                                <CardTitle className="text-base line-clamp-2">
                                  {relatedPost.title}
                                </CardTitle>
                              </CardHeader>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                  <div className="sticky top-4 space-y-6">
                    
                    {/* Author */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Autore</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{post.author}</p>
                            <p className="text-sm text-muted-foreground">Contributor</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA Experiences */}
                    {post.relatedExperiences && post.relatedExperiences.length > 0 && (
                      <Card className="bg-gradient-nature text-white">
                        <CardHeader>
                          <CardTitle className="text-lg">Esperienze Correlate</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-4 text-white/90">
                            Scopri le esperienze legate a questo articolo.
                          </p>
                          <Link to="/esperienze">
                            <Button variant="secondary" className="w-full">
                              Scopri di più
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    )}

                    {/* CTA General */}
                    <Card className="bg-gradient-warm text-white">
                      <CardHeader>
                        <CardTitle className="text-lg">Prenota un'Esperienza</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4 text-white/90">
                          Vivi l'Emilia-Romagna con le nostre esperienze autentiche.
                        </p>
                        <Link to="/esperienze">
                          <Button variant="secondary" className="w-full">
                            Esplora Ora
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
