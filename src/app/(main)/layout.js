import MainNavigationBar from "@/components/shared/mainNavigationBar/MainNavigationBar";
import MainFooter from "@/components/shared/mainFooter/MainFooter";
import DynamicAsidePanel from "@/components/shared/DynamicAsidePanel";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

export default function StoreLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigationBar />
      <main className="flex-grow">{children}</main>
      <DynamicAsidePanel />
      <MainFooter />
      <ScrollToTopButton />
    </div>
  );
}
