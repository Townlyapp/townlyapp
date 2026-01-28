import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Esperienze from "./pages/Esperienze";
import ChiSiamo from "./pages/ChiSiamo";
import DiventaPartner from "./pages/DiventaPartner";
import Contatti from "./pages/Contatti";
import TerminiUso from "./pages/TerminiUso";
import PoliticaRimborso from "./pages/PoliticaRimborso";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/esperienze" element={<Esperienze />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/diventa-partner" element={<DiventaPartner />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/termini-uso" element={<TerminiUso />} />
          <Route path="/politica-rimborso" element={<PoliticaRimborso />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
