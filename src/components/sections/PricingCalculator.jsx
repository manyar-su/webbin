import { useState, useMemo } from 'react';
import { Check, Calculator, Clock, MessageCircle } from 'lucide-react';
import { calculatorFeatures, basePrice, baseDuration } from '@/data/calculatorFeatures';
import { site } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionReveal from '@/components/ui/SectionReveal';

function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

export default function PricingCalculator() {
  const [selected, setSelected] = useState({ responsive: true, seo: true });

  const toggle = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const { totalPrice, totalDuration } = useMemo(() => {
    let price = basePrice;
    let durations = [baseDuration];
    calculatorFeatures.forEach((f) => {
      if (selected[f.id] && f.price > 0) {
        price += f.price;
        if (f.duration !== '—') durations.push(f.duration);
      }
    });
    return { totalPrice: price, totalDuration: durations.length > 1 ? '1-3 minggu' : baseDuration };
  }, [selected]);

  const waMessage = encodeURIComponent(
    `Halo Webin, saya ingin konsultasi dengan estimasi fitur:\n${calculatorFeatures
      .filter((f) => selected[f.id])
      .map((f) => `- ${f.name}`)
      .join('\n')}\n\nEstimasi harga: ${formatRupiah(totalPrice)}\nEstimasi waktu: ${totalDuration}`
  );

  return (
    <section id="calculator" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Kalkulator Harga"
          title="Hitung Estimasi Biaya Website Anda"
          description="Pilih fitur yang Anda butuhkan dan dapatkan estimasi harga serta waktu pengerjaan secara real-time."
        />
        <SectionReveal className="mt-12">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Feature checklist */}
            <div className="lg:col-span-3 rounded-2xl border border-border/40 bg-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Pilih Fitur Website</h3>
              </div>
              <div className="space-y-2">
                {calculatorFeatures.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => toggle(f.id)}
                    disabled={f.id === 'responsive'}
                    className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${
                      selected[f.id]
                        ? 'border-primary/50 bg-primary/5'
                        : 'border-border/40 hover:border-border'
                    } ${f.id === 'responsive' ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-md border transition-colors ${
                        selected[f.id] ? 'bg-primary border-primary' : 'border-border'
                      }`}>
                        {selected[f.id] && <Check className="h-3.5 w-3.5 text-white" />}
                      </div>
                      <span className="text-sm font-medium">{f.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-foreground">
                        {f.price === 0 ? 'Termasuk' : `+${formatRupiah(f.price)}`}
                      </span>
                      <span className="ml-2 text-xs text-muted-foreground">{f.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price summary */}
            <div className="lg:col-span-2 flex flex-col rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 md:p-8">
              <h3 className="text-lg font-semibold">Estimasi Harga</h3>
              <div className="mt-4 font-mono text-4xl font-bold tracking-tight text-primary">
                {formatRupiah(totalPrice)}
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Estimasi waktu pengerjaan: <strong className="text-foreground">{totalDuration}</strong></span>
              </div>

              <div className="mt-auto space-y-3 pt-8">
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
                >
                  Konsultasi Gratis
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <MessageCircle className="h-4 w-4 text-success" />
                  Kirim ke WhatsApp
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}