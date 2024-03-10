"use client"
import { useState } from "react";
import Image from "next/image";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRecommendedOption, setSelectedRecommendedOption] =
    useState("RECOMMENDED");
  const [showFilterToggler, setShowFilterToggler] = useState(false);
  const [selectedMoreOption, setSelectedMoreOption] = useState(null);
  const [filterOptions] = useState([
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ]);
  const [showFilterOptions] = useState([
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ]);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleShowFilterToggle = () => {
    setShowFilterToggler(!showFilterToggler);
  };

  const handleOptionSelect = (option) => {
    setSelectedRecommendedOption(option);
    setShowFilterToggler(false);
  };

  return (
    <> 
     <hr />
      <div className="flex justify-between items-center px-14 py-5">
        <div className="flex">
          <p className="text-sm font-semibold text-black mr-24 hidden sm:block">3425 items</p>
          <Image src="/images/left.png" alt="arrow" width={12} height={12} />
          <button
            className="underline text-sm text-gray-700 focus:outline-none font-adobe-caslon-pro font-normal text-16 leading-40 text-right"
            onClick={handleShowFilterToggle}
          >
            SHOW FILTER
          </button>
          {showFilterToggler && (
            <div>
              <ul className="absolute left-28 mt-5 w-64 text-black bg-white border rounded shadow-md z-10">
                <li>
                  {" "}
                  <label class="inline-flex items-center cursor-pointe py-3 px-2">
                    <input type="radio" name="customizable" class="hidden" />
                    <span class="w-6 h-6 border border-gray-400 rounded-md flex items-center justify-center mr-2">
                      <svg class="w-4 h-4 hidden" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6 10l2 2 6-6" />
                      </svg>
                    </span>
                    <span class="text-sm font-medium text-gray-700">
                      Customizable
                    </span>
                  </label>
                </li>
                <li>
                  <hr />
                </li>
                {showFilterOptions.map((option) => (
                  <li
                    key={option}
                    className="flex justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    <div>
                      {option}
                      <br />
                      All
                    </div>
                    <div>
                      <span className="text-right">
                        {" "}
                        <Image
                          src="/images/arrow-left.png"
                          alt="arrow"
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <p
            className="flex gap-3 text-black cursor-pointer font-simplon-norm font-semibold text-sm leading-40"
            onClick={handleFilterToggle}
          >
            {selectedRecommendedOption}
            <span className="flex items-center">
              <Image
                src="/images/arrow-left.png"
                alt="arrow"
                width={20}
                height={20}
              />
            </span>
          </p>
          {showFilter && (
            <ul className="absolute right-0 mt-2 w-48 text-black bg-white border rounded shadow-md z-10">
              {filterOptions.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between"
                  onClick={() => handleOptionSelect(option)}
                >
                  {selectedRecommendedOption === option && (
                    <Image
                      src="/images/vector.png"
                      alt="tick"
                      width={14}
                      height={14}
                    />
                  )}
                  <span className="text-right flex-grow text-sm">{option}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Filter;
