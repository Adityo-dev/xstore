import LogoAndSubscription from "./LogoAndSubscription";
import NavigationLinks from "./NavigationLinks";
import SocialIconAndPayment from "./SocialIconAndPayment";

export default function MainFooter() {
  return (
    <footer className="bg-[#1E1F25] text-white mt-24 py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Logo & Subscription */}
        <div className="col-span-2 pr-20 border-r border-[#FFFFFF24] py-12">
          <LogoAndSubscription />
        </div>

        {/* Navigation Links */}
        <div className="col-span-3 ps-20 py-12">
          <NavigationLinks />
        </div>
      </div>

      {/* SocialIcon And Payment */}
      <SocialIconAndPayment />

      {/* copy right */}
      <p className="pt-12 text-center text-xs text-[#A9ABB2] font-marcellus">
        © 2025 XStore Gaming. Powered by Next Js
      </p>
    </footer>
  );
}
