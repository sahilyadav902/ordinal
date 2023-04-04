export default function OrdinalCard() {
  //Design for Ordinal Data Card
  return (
    <div className="text-center md:text-start max-h-[400px] max-w-[480px]">
      <div className=" leading-[125%] text-[30px] md:text-[50px] lg:text-[70px] font-[700]">
        Inscribe your first
        <span className="text-[#6157FF]"> ordinal</span>
      </div>
      <p className="py-5 text-[16px] md:text-[20px] lg:text-[22px] leading-[174%] font-[400] opacity-[0.4]">
        Ordinals, a controversial new protocol deployed on Bitcoin, enables
        non-fungible tokens (NFTs) to be appended to Bitcoin transactions,
        effectively bringing NFTs to the largest crypto network by market
        capitalization
      </p>
    </div>
  );
}
