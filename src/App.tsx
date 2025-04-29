import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4">Contenido principal</main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
