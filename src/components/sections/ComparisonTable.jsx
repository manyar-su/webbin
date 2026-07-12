import { Check, X } from 'lucide-react';
import { comparisonColumns, comparisonRows } from '@/data/comparison';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionReveal from '@/components/ui/SectionReveal';

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Perbandingan Paket"
          title="Bandingkan Fitur Setiap Paket"
          description="Lihat detail fitur yang termasuk dalam setiap paket untuk membantu Anda memilih yang tepat."
        />
        <SectionReveal className="mt-12">
          <div className="overflow-x-auto rounded-2xl border border-border/40 bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="p-4 text-left text-sm font-semibold text-muted-foreground md:p-5">Fitur</th>
                  {comparisonColumns.map((col) => (
                    <th
                      key={col.name}
                      className={`p-4 text-center text-sm font-bold md:p-5 ${
                        col.highlighted ? 'bg-primary/5 text-primary' : 'text-foreground'
                      }`}
                    >
                      {col.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="p-4 text-sm text-muted-foreground md:p-5">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className={`p-4 text-center md:p-5 ${comparisonColumns[j].highlighted ? 'bg-primary/5' : ''}`}
                      >
                        {v ? (
                          <Check className="mx-auto h-5 w-5 text-success" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/30" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-border/40">
                  <td className="p-4 text-sm font-semibold md:p-5">Harga</td>
                  {comparisonColumns.map((col) => (
                    <td
                      key={col.name}
                      className={`p-4 text-center md:p-5 ${col.highlighted ? 'bg-primary/5' : ''}`}
                    >
                      <span className={`font-mono text-sm font-bold ${col.highlighted ? 'text-primary' : 'text-foreground'}`}>
                        {col.price}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}