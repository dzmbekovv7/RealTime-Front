import { motion } from "framer-motion";
import { useHomeStore } from "../store/useHomeStore";

export default function PredictForm() {
  const { form, price, isPredicting, setFormField, submitPrediction } = useHomeStore();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormField(name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPrediction();
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-[750px] max-w-md rounded-2xl border border-neutral-700 bg-neutral-900/60 backdrop-blur-md shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center tracking-wide mb-6 uppercase text-white">
          Оценка жилья
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 p-[20px]">
          <input
            name="bedrooms"
            type="number"
            placeholder="Количество спален"
            value={form.bedrooms}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 h-[15px] mt-[0px] p-[10px] text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            name="bathrooms"
            type="number"
            placeholder="Количество ванных"
            value={form.bathrooms}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 h-[15px] mt-[7px] p-[10px] text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            name="floors"
            type="number"
            placeholder="Количество этажей"
            value={form.floors}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 h-[15px] mt-[7px] p-[10px] text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            name="sqft"
            type="number"
            placeholder="Площадь (кв.м)"
            value={form.sqft}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 h-[15px] mt-[7px] p-[10px] text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <label className="flex items-center space-x-2 text-sm mt-[7px] text-zinc-300">
            <input
              type="checkbox"
              name="has_pool"
              checked={form.has_pool}
              onChange={handleChange}
              className="accent-pink-500 scale-110"
            />
            <span>Есть бассейн</span>
          </label>

          <select
            name="property_type"
            value={form.property_type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 h-[30px] mt-[7px]  text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="Квартира">Квартира</option>
            <option value="Дом">Дом</option>
            <option value="Вилла">Вилла</option>
            <option value="Коттедж">Коттедж</option>
            <option value="Участок">Участок</option>
          </select>

          <select
            name="region"
            value={form.region}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 h-[30px] mt-[7px]  text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="Бишкек">Бишкек</option>
            <option value="Иссык-Кульская область">Иссык-Кульская область</option>
            <option value="Чуйская область">Чуйская область</option>
            <option value="Ошская область">Ошская область</option>
            <option value="Джалал-Абадская область">Джалал-Абадская область</option>
          </select>

          <button
            type="submit"
            disabled={isPredicting}
            className="w-full mt-10 bg-pink-600 hover:bg-pink-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg uppercase tracking-wider"
          >
            {isPredicting ? "Предсказание..." : "Предсказать"}
          </button>
        </form>

        {price !== null && (
          <motion.p
            className="text-center mt-6 text-green-400 text-lg font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            💰 Предсказанная цена: ${price.toLocaleString()}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
