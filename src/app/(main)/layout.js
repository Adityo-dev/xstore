import MainNavigationBar from "@/components/main/mainNavigationBar/MainNavigationBar";
import MainFooter from "@/components/main/mainFooter/MainFooter";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

export default function StoreLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigationBar />
      <main className="flex-grow">{children}</main>
      <MainFooter />
      <ScrollToTopButton />
    </div>
  );
}
