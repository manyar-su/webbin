import { Instagram, Github, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-xl font-heading font-bold tracking-tighter">
              <span className="gradient-text">Webin</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{site.tagline}</p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">{site.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Layanan</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Keunggulan</a></li>
              <li><a href="#demo" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Demo Website</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Paket Harga</a></li>
              <li><a href="#calculator" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Kalkulator Harga</a></li>
              <li><a href="#case-studies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Studi Kasus</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Kontak</h4>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {site.address}
              </li>
              <li>
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <MessageCircle className="h-4 w-4 shrink-0 text-primary" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Instagram className="h-4 w-4 shrink-0 text-primary" /> Instagram
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Github className="h-4 w-4 shrink-0 text-primary" /> GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Newsletter</h4>
            <p className="mt-3 text-sm text-muted-foreground">Dapatkan tips digital marketing terbaru dari kami.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90"
                aria-label="Kirim"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Webin. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Kebijakan Privasi</a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Syarat &amp; Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}