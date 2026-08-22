export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4">
      
      {/* Teks Hak Cipta yang sudah rata tengah */}
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        © {new Date().getFullYear()} . Hak Cipta Dilindungi.
      </p>
      
    </footer>
  );
}