import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center py-4 px-6 pl-6 sm:pl-32  bg-white text-white">
        {/* Left Section - Brand Logo */}
        <div className="flex gap-2 items-center">
          <Image
            className="sm:hidden"
            src="/images/hamburger.png"
            alt="hamburger"
            width={30}
            height={30}
          />
          <Image
            src="/images/logo-img.png"
            alt="Brand Logo"
            width={40}
            height={40}
          />
        </div>

        {/* Center Section - Brand Name */}
        <span className="text-black font-inter text-xl sm:text-3xl font-extrabold leading-11 tracking-wider text-left">
          LOGO
        </span>

        {/* Right Section - Icons */}
        <div className="flex items-center gap-3">
          {/* Search Icon */}
          <Image
            src="/images/search-normal.png"
            alt="Brand Logo"
            width={30}
            height={30}
          />

          {/* Profile Icon */}
          <Image
            className="hidden lg:block"
            src="/images/profile.png"
            alt="profile-img"
            width={30}
            height={30}
          />

          {/* Heart Icon */}
          <Image
            src="/images/heart.png"
            alt="heart-img"
            width={30}
            height={30}
          />

          {/* Cart Icon */}
          <Image
            src="/images/shopping-bag.png"
            alt="Brand Logo"
            width={30}
            height={30}
          />
          {/* Language Selector */}
          <div className="hidden lg:flex items-center">
            <span className="mr-1 text-black">ENG</span>
            <Image
              src="/images/arrow-left.png"
              alt="left-arrow"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center bg-white ">
        <ul className="flex space-x-8 font-simplon-norm font-bold text-xl leading-5 tracking-wider text-black m-4">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <hr className="bg-red"></hr>
    </header>
  );
};

export default Header;
