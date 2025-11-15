function ContactHeader() {
  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="col-span-3">
        <p className="text-[17px] text-[#776BF8] font-marcellus">
          24/7 Online Support
        </p>
        <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold font-marcellus lg:leading-16 mt-3">
          Have questions? <br /> Ready to help!
        </h2>
      </div>
      <p className="col-span-2 text-[#8E919F] text-[17px] border-s-2 ps-4 lg:ps-8 border-[#776BF8] flex items-center">
        If you use this site regularly and would like to help keep the site on
        the Internet, please consider donating a small sum to help pay for the
        hosting and bandwidth bill.
      </p>
    </div>
  );
}

export default ContactHeader;
