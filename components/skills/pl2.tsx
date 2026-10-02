export default function pl2() {
  return (
    <div className="pl-6 bg-linear-to-r from-sky-500 to-purple-700 sm:rounded-b-lg pb-3 pt-1">
      {["English", "French", "Hindi", "Tamil"].map((e) => {
        return (
          <div
            key={e}
            className="text-white font-medium text-xl leading-relaxed"
          >
            {e}
          </div>
        );
      })}
    </div>
  );
}
