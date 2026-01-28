import { useState, useEffect } from "react";
import { Star, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

interface Review {
  id: string;
  user_name: string;
  rating: number;
  comment: string;
  photos: string[];
  created_at: string;
}

interface ReviewSectionProps {
  productHandle: string;
}

// Validation schema for review submission
const reviewSchema = z.object({
  user_name: z.string().trim().min(1, "Il nome è obbligatorio").max(100, "Il nome deve essere massimo 100 caratteri"),
  user_email: z.string().trim().email("Email non valida").max(255, "L'email deve essere massimo 255 caratteri"),
  rating: z.number().int().min(1, "Il rating deve essere almeno 1").max(5, "Il rating deve essere massimo 5"),
  comment: z.string().trim().min(10, "Il commento deve essere almeno 10 caratteri").max(2000, "Il commento deve essere massimo 2000 caratteri"),
  photos: z.array(z.string()).max(5, "Puoi caricare massimo 5 foto")
});

const ReviewSection = ({ productHandle }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadReviews();
  }, [productHandle]);

  const loadReviews = async () => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("product_handle", productHandle)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error("Error loading reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Validate input data
      const validationResult = reviewSchema.safeParse({
        user_name: userName,
        user_email: userEmail,
        rating,
        comment,
        photos
      });

      if (!validationResult.success) {
        const firstError = validationResult.error.errors[0];
        toast.error(firstError.message);
        setSubmitting(false);
        return;
      }

      const { error } = await supabase.from("reviews").insert({
        product_handle: productHandle,
        user_name: validationResult.data.user_name,
        user_email: validationResult.data.user_email,
        rating: validationResult.data.rating,
        comment: validationResult.data.comment,
        photos: validationResult.data.photos,
      });

      if (error) throw error;

      toast.success("Recensione pubblicata! 🎉");
      setShowForm(false);
      setUserName("");
      setUserEmail("");
      setRating(5);
      setComment("");
      setPhotos([]);
      loadReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Errore nell'invio della recensione");
    } finally {
      setSubmitting(false);
    }
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Check if adding these files would exceed the limit
    if (photos.length + files.length > 5) {
      toast.error("Puoi caricare massimo 5 foto");
      return;
    }

    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes
    const fileReaders: Promise<string>[] = [];
    
    Array.from(files).forEach((file) => {
      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name} supera i 2MB. Scegli un'immagine più piccola.`);
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error(`${file.name} non è un'immagine valida`);
        return;
      }

      const reader = new FileReader();
      const promise = new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
      });
      reader.readAsDataURL(file);
      fileReaders.push(promise);
    });

    Promise.all(fileReaders).then((results) => {
      setPhotos([...photos, ...results]);
    });
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                Recensioni
              </h2>
              {reviews.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= averageRating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">
                    {averageRating.toFixed(1)}
                  </span>
                  <span className="text-muted-foreground">
                    ({reviews.length} {reviews.length === 1 ? "recensione" : "recensioni"})
                  </span>
                </div>
              )}
            </div>
            <Button onClick={() => setShowForm(!showForm)}>
              {showForm ? "Chiudi" : "Scrivi Recensione"}
            </Button>
          </div>

          {showForm && (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Nome"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Valutazione
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${
                              star <= rating
                                ? "fill-primary text-primary"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <Textarea
                    placeholder="Condividi la tua esperienza..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows={4}
                  />

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Foto (opzionale)
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative">
                          <img
                            src={photo}
                            alt={`Upload ${index + 1}`}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => setPhotos(photos.filter((_, i) => i !== index))}
                            className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <label className="w-24 h-24 border-2 border-dashed border-border rounded-lg flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                        <Upload className="w-6 h-6 text-muted-foreground" />
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting ? "Invio..." : "Pubblica Recensione"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="space-y-6">
            {loading ? (
              <p className="text-center text-muted-foreground">Caricamento recensioni...</p>
            ) : reviews.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Ancora nessuna recensione. Sii il primo a condividere la tua esperienza!
                  </p>
                </CardContent>
              </Card>
            ) : (
              reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold">{review.user_name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating
                                    ? "fill-primary text-primary"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(review.created_at).toLocaleDateString("it-IT")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground mb-4">{review.comment}</p>
                    {review.photos && review.photos.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {review.photos.map((photo, index) => (
                          <img
                            key={index}
                            src={photo}
                            alt={`Foto recensione ${index + 1}`}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
