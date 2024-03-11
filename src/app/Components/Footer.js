import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-black">
        <div className="block sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4 m-4 pt-16 md:m-10">
          <div className="p-4 pl-10 lg:pl-16">
            <h3 className="text-lg font-bold leading-6 mb-3">
              Be The First To Know
            </h3>
            <p className="font-simplon-norm text-base font-normal leading-5 tracking-tight text-left mb-4 lg:mb-10">
              Sign Up for updates from meta musse.
            </p>
            <input
              className="p-2 lg:ps-4 w-36 sm:w-60 font-simplon-norm text-base font-normal leading-6 tracking-normal text-left text-black placeholder-sm"
              placeholder="Enter Your Email..."
            ></input>
            <button className="md:ml-5 mt-2 md:mt-0 text-white py-2 px-4 border border-gray-400 rounded shadow font-medium text-base leading-7">
              Subscribe
            </button>
          </div>
          {/* <div className="p-4 pl-16 lg:pl-0">
            <hr className="sm:hidden" />
          </div> */}
          <div className="p-4 pl-10 lg:pl-0">
            <h3 className="text-lg font-bold leading-6 mb-3">CONTACT US</h3>
            <p className="font-normal text-base leading-6 mb-3">
              +44 221 133 5360
            </p>
            <p className="font-normal text-base leading-6 mb-5">
              customercare@mettamuse.com
            </p>
            <hr className="sm:hidden" />
            <h3 className="text-lg font-bold leading-6 mt-2 mb-3">CURRENCY</h3>
            <div className="flex items-center mb-2">
              <Image
                src="/images/flag.png"
                alt="My Image"
                width={20}
                height={30}
              />
              <span className="ml-1">USD</span>
            </div>
            <p className="hidden lg:block font-normal text-sm leading-4">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <hr></hr>
        <div className="block lg:grid lg:grid-cols-2 m-10 mb-2">
          <div className="p-1 sm:p-4">
            <div className="block lg:grid lg:grid-cols-2 ms-2 lg:ms-11">
              <div className="p-1 lg:p-4">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg leading-8 mb-2">
                    mettā muse
                  </h3>
                  <Image
                    src="/images/arrow-left.png"
                    alt="arrow"
                    width={12}
                    height={12}
                  />
                </div>
                <hr className="lg:hidden" />
                <ul className="hidden lg:block">
                  <li className="font-normal text-base leading-7 mb-1">
                    About US
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    Stories
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    Artisans
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    Boutiques
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    Contact Us
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    EU Compliances Docs
                  </li>
                </ul>
              </div>
              <div className="p-1 lg:p-4">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg leading-8 mb-2">
                    QUICK LINKS
                  </h3>
                  <Image
                    src="/images/arrow-left.png"
                    alt="arrow"
                    width={12}
                    height={12}
                  />
                </div>
                <hr className="lg:hidden" />
                <ul className="hidden lg:block">
                  <li className="font-normal text-base leading-7 mb-1">
                    Orders & shipping
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    join/login as a Seller
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    Payment & Pricing
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    Return & Refunds
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">FAQs</li>
                  <li className="font-normal text-base leading-7 mb-1">
                    Privacy Policy
                  </li>
                  <li className="font-normal text-base leading-7 mb-1">
                    Terms & Conditions
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 m-1 mt-3">
            <h3 className="font-bold text-lg leading-8 mb-2">Follow Us</h3>
            <div className="flex items-center mb-5">
              <a href="#">
                {" "}
                <Image
                  src="/images/a.png"
                  alt="My Image"
                  width={20}
                  height={30}
                />
              </a>
              <a className="ml-2" href="#">
                {" "}
                <Image
                  src="/images/svg.png"
                  alt="My Image"
                  width={30}
                  height={40}
                />
              </a>
            </div>
            <h2 className="font-bold text-lg leading-8 mt-12">
              Metta Muse ACCEPTS
            </h2>
            <div className="flex items-center mb-5 pt-2">
              <a href="#">
                {" "}
                <Image
                  src="/images/gpay.png"
                  alt="My Image"
                  width={30}
                  height={40}
                />
              </a>
              <a className="ml-2" href="#">
                {" "}
                <Image
                  src="/images/mastercard.png"
                  alt="My Image"
                  width={30}
                  height={40}
                />
              </a>
              <a className="ml-2" href="#">
                {" "}
                <Image
                  src="/images/paypal.png"
                  alt="My Image"
                  width={30}
                  height={40}
                />
              </a>
              <a className="ml-2" href="#">
                {" "}
                <Image
                  src="/images/amex.png"
                  alt="My Image"
                  width={30}
                  height={40}
                />
              </a>
              <a className="ml-2" href="#">
                {" "}
                <Image
                  src="/images/apppay.png"
                  alt="My Image"
                  width={30}
                  height={40}
                />
              </a>
              <a className="ml-2" href="#">
                {" "}
                <Image
                  src="/images/dpay.png"
                  alt="My Image"
                  width={30}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
        <p className="font-normal text-sm leading-5 text-center pb-3">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </footer>
    </>
  );
}
