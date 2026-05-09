"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Percent, Calendar, BarChart3 } from "lucide-react";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const formatted = new Intl.NumberFormat("en-US").format(Math.round(value));
  return <span>{prefix}{formatted}{suffix}</span>;
}

function BarChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-32">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${(v / max) * 100}%` }}
          transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 rounded-t-sm"
          style={{
            background: i === data.length - 1
              ? "linear-gradient(to top, #D6A85F, #E8C07A)"
              : `rgba(14, 143, 116, ${0.3 + (i / data.length) * 0.5})`,
          }}
        />
      ))}
    </div>
  );
}

export default function CalculatorPage() {
  const [price, setPrice] = useState(430000);
  const [downPct, setDownPct] = useState(20);
  const [tenure, setTenure] = useState(20);
  const [rate, setRate] = useState(6.5);

  const results = useMemo(() => {
    const down = price * (downPct / 100);
    const loan = price - down;
    const monthlyRate = rate / 100 / 12;
    const months = tenure * 12;
    const monthly = monthlyRate > 0
      ? (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
      : loan / months;
    const total = monthly * months;
    const interest = total - loan;
    const roi = ((price * 1.05 ** tenure - price) / down) * 100;

    // Build yearly chart data (principal paid per year)
    const yearlyPayments = Array.from({ length: Math.min(tenure, 20) }, (_, i) => monthly * 12 * (i + 1));

    return { down, loan, monthly, total, interest, roi, yearlyPayments };
  }, [price, downPct, tenure, rate]);

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,143,116,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(214,168,95,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold/60" />
            <span className="font-number text-xs text-gold uppercase tracking-widest">Finance</span>
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-soft-white">
            Plan Smart,<br /><span className="text-gold">Invest Better</span>
          </h1>
          <p className="text-soft-white/40 mt-3">Calculate your future home investment.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass gradient-border rounded-2xl p-8"
          >
            <h2 className="font-display font-semibold text-xl text-soft-white mb-8">Loan Details</h2>

            <div className="space-y-8">
              {/* Property Price */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-soft-white/60 font-number">
                    <DollarSign size={14} className="text-gold" /> Property Price
                  </label>
                  <span className="font-number font-bold text-gold">${(price / 1000).toFixed(0)}K</span>
                </div>
                <input
                  type="range" min={100000} max={2000000} step={5000}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-[#D6A85F] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-soft-white/20 mt-1">
                  <span>$100K</span><span>$2M</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-soft-white/60 font-number">
                    <Percent size={14} className="text-gold" /> Down Payment
                  </label>
                  <span className="font-number font-bold text-gold">{downPct}% (${(price * downPct / 100 / 1000).toFixed(0)}K)</span>
                </div>
                <input
                  type="range" min={5} max={60} step={1}
                  value={downPct}
                  onChange={(e) => setDownPct(Number(e.target.value))}
                  className="w-full accent-[#D6A85F] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-soft-white/20 mt-1">
                  <span>5%</span><span>60%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-soft-white/60 font-number">
                    <Calendar size={14} className="text-gold" /> Loan Tenure
                  </label>
                  <span className="font-number font-bold text-gold">{tenure} Years</span>
                </div>
                <input
                  type="range" min={5} max={30} step={1}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-[#D6A85F] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-soft-white/20 mt-1">
                  <span>5Y</span><span>30Y</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-soft-white/60 font-number">
                    <TrendingUp size={14} className="text-gold" /> Interest Rate
                  </label>
                  <span className="font-number font-bold text-gold">{rate.toFixed(1)}% p.a.</span>
                </div>
                <input
                  type="range" min={1} max={15} step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-[#D6A85F] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-soft-white/20 mt-1">
                  <span>1%</span><span>15%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Monthly payment — hero */}
            <div className="glass gradient-border rounded-2xl p-8 text-center">
              <p className="font-number text-xs text-soft-white/40 uppercase tracking-widest mb-2">Monthly Payment</p>
              <motion.p
                key={Math.round(results.monthly)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-number font-bold text-5xl text-gold"
              >
                $<AnimatedNumber value={results.monthly} />
              </motion.p>
              <p className="text-soft-white/30 text-xs mt-2">Estimated monthly installment</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Loan Amount", val: results.loan, prefix: "$", color: "text-soft-white" },
                { label: "Down Payment", val: results.down, prefix: "$", color: "text-emerald-glow" },
                { label: "Total Payment", val: results.total, prefix: "$", color: "text-gold" },
                { label: "Total Interest", val: results.interest, prefix: "$", color: "text-[#E85F5F]" },
              ].map(({ label, val, prefix, color }) => (
                <div key={label} className="glass-light border border-border-subtle rounded-xl p-4">
                  <p className="text-soft-white/40 text-xs mb-2">{label}</p>
                  <p className={`font-number font-bold text-xl ${color}`}>
                    <AnimatedNumber value={val} prefix={prefix} />
                  </p>
                </div>
              ))}
            </div>

            {/* ROI */}
            <div className="glass-light border border-border-subtle rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp size={20} className="text-emerald-glow" />
                <div>
                  <p className="text-soft-white/40 text-xs">ROI Projection ({tenure}Y)</p>
                  <p className="text-soft-white text-sm font-number font-semibold mt-0.5">Based on 5% annual appreciation</p>
                </div>
              </div>
              <p className="font-number font-bold text-2xl text-emerald-glow">
                {Math.round(results.roi)}%
              </p>
            </div>

            {/* Chart */}
            <div className="glass gradient-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 size={16} className="text-gold" />
                <span className="font-number text-sm font-semibold text-soft-white">Cumulative Payments</span>
                <span className="text-soft-white/30 text-xs ml-auto">Yearly</span>
              </div>
              <BarChart data={results.yearlyPayments} />
              <div className="flex items-center justify-between mt-3">
                <span className="text-soft-white/30 text-xs">Year 1</span>
                <span className="text-soft-white/30 text-xs">Year {Math.min(tenure, 20)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
