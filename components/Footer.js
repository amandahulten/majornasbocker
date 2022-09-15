import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="h-[20px] bg-black-coffee"></div>
      <div className="bg-[url('../public/bg-footer-desktop.svg')]">
        <div className="py-2 px-8">
          <p className="text-[32px] text-whiteish text-center font-h1">
            majorna
          </p>
          <p className="text-[32px] text-whiteish text-center font-h1">
            bokhandel & kaffe
          </p>
          <div className="flex justify-center w-full mt-[40px]">
            <div className="flex justify-between w-[160px]">
              <div className="text-center">
                <Image
                  src="/logo-insta.svg"
                  alt="instagram-logo"
                  height="40"
                  width="40"
                />
                <p className="text-[14px] text-whiteish">Instagram</p>
              </div>
              <div className="text-center">
                <Image
                  src="/logo-fb.svg"
                  alt="instagram-logo"
                  height="40"
                  width="40"
                />
                <p className="text-[14px] text-whiteish">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
