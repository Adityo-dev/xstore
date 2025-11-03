import Container from "@/components/Container";
import LogoAndSubscription from "./LogoAndSubscription";
import NavigationLinks from "./NavigationLinks";
import SocialIconAndPayment from "./SocialIconAndPayment";

export default function MainFooter() {
  return (
    <footer className="bg-[#1E1F25] text-white py-4">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Logo & Subscription */}
          <div className="col-span-2 lg:pr-10 xl:pr-20 border-b lg:border-b-0 lg:border-r border-[#FFFFFF24] py-12">
            <LogoAndSubscription />
          </div>

          {/* Navigation Links */}
          <div className="col-span-3 lg:ps-10 xl:ps-20 py-8 lg:py-12">
            <NavigationLinks />
          </div>
        </div>

        {/* SocialIcon And Payment */}
        <SocialIconAndPayment />

        {/* copy right */}
        <p className="pt-12 text-center text-xs text-[#A9ABB2] font-marcellus">
          © 2025 XStore Gaming. Powered by Next Js
        </p>
      </Container>
    </footer>
  );
}
