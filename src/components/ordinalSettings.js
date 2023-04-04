import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function OrdinalSettings({ setFile, loading }) {
  const [rangeValue, setRangeValue] = useState(120000);
  const [stepSize, setStepSize] = useState(2);

  // Set international number formatting
  let numf = new Intl.NumberFormat("en-US");

  //Update range value from slider
  const handleRange = (event) => {
    setRangeValue(event.target.value);
  };

  //Handle step size for maximum range
  const handleStepSize = () => {
    if (stepSize <= 2) {
      setStepSize(stepSize + 1);
    } else {
      setStepSize(1);
    }
  };

  return (
    <>
      {/* Skeleton Screen Theme */}
      <SkeletonTheme
        width="100px"
        height="15px"
        borderRadius="20px"
        baseColor="#1e1e1e"
        highlightColor="#444"
      >
        <div className="max-w-[500px]">
          <div className="font-[500] text-[12px] sm:text-[14px] md:text-[18px] w-full h-full">
            <div className={`mx-2 mb-4 ${!loading && " ordinal-bg"}`}>
              <div className="px-2 text-[20px] md:text-[24px] text-center">
                {loading ? <Skeleton width="120px" /> : "Ordinal Settings"}
              </div>
              <div className="p-2 flex flex-row justify-between">
                <div>{loading ? <Skeleton /> : "Effective fee rate"}</div>
                <div
                  className="text-[#5E41ED] cursor-pointer"
                  onClick={handleStepSize}
                >
                  {loading ? <Skeleton width="20px" /> : `x${stepSize}`}
                </div>
              </div>
              {/* Range Slider Input */}
              <div className="p-2">
                {loading ? (
                  <Skeleton width="100%" />
                ) : (
                  <input
                    type="range"
                    min="100000"
                    max={150000 * stepSize}
                    className="range-slider"
                    value={rangeValue}
                    onChange={handleRange}
                  />
                )}
              </div>
              {/* Range Related Data */}
              <div className="p-2 grid grid-cols-3 gap-x-5 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px]">
                <div className="flex flex-col gap-y-1">
                  {loading ? (
                    <Skeleton count={2} />
                  ) : (
                    <>
                      <div className="opacity-[0.4]">Base size fee</div>
                      <div className="">{numf.format(rangeValue)} sats</div>
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  {loading ? (
                    <Skeleton count={2} />
                  ) : (
                    <>
                      <div className="opacity-[0.4]">Total fee size</div>
                      <div className="">
                        {numf.format(Math.floor(rangeValue * 1.5))} sats
                      </div>
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  {loading ? (
                    <Skeleton count={2} />
                  ) : (
                    <>
                      <div className="opacity-[0.4]">Time to create</div>
                      <div className="">
                        ~{Math.floor(7.5 * stepSize)} minutes
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* Ordinal Address Box */}
            <div className={`mx-2 mb-4 ${!loading && " ordinal-bg"}`}>
              <div className="p-2 pt-0 pb-1 flex flex-row justify-between">
                <div className="">
                  {loading ? (
                    <Skeleton width="220px" />
                  ) : (
                    <>
                      <span className="underline underline-offset-4">
                        {/* External Reference Link */}
                        <a
                          href="https://www.xverse.app/blog/how-to-inscribe-ordinal-bitcoin-nfts-5-easy-steps"
                          target="_blank"
                        >
                          Ord-compatible
                        </a>
                      </span>
                      <span> recipient address</span>
                    </>
                  )}
                </div>
                {/* Tooltip Display */}
                {loading ? (
                  <Skeleton width="20px" />
                ) : (
                  <>
                    <div
                      data-tip="Your unique wallet address"
                      className="tooltip cursor-pointer"
                    >
                      <span className="underline underline-offset-4 opacity-[0.4]">
                        ?
                      </span>
                    </div>
                  </>
                )}
              </div>
              {/* Input Textarea */}
              <div className="p-2">
                {loading ? (
                  <Skeleton width="40%" />
                ) : (
                  <textarea
                    className="bg-none h-20 w-full resize-none opacity-[0.4]"
                    placeholder="Enter your address..."
                  />
                )}
              </div>
            </div>
            {/* Continue Button */}
            <div className="m-2 text-center">
              {loading ? (
                <Skeleton />
              ) : (
                <>
                  <label
                    for="ordinal-submit"
                    className="inline-block cursor-pointer w-full h-fit p-3 bg-[#5E41ED] rounded-[16px] text-[12px] sm:text-[14px] md:text-[18px]"
                  >
                    Continue
                  </label>
                  {/* Modal Overlay */}
                  <input
                    type="checkbox"
                    id="ordinal-submit"
                    class="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <p className="text-black text-lg text-center md:text-start">
                        Congratulations! You have created your first ordinal.
                      </p>
                      <div className="modal-action justify-center md:justify-end">
                        <label
                          for="ordinal-submit"
                          className="btn btn-primary"
                          onClick={() => setFile(null)}
                        >
                          Create More
                        </label>
                        <label for="ordinal-submit" className="btn">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}
