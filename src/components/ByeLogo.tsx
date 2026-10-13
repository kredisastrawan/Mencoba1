   export const BYE_LOGO_DATA_URI = "/bye-logo.webp";

   export const ByeLogo = ({ className = "h-10 w-auto" }: { className?: string }) => (
     <img src={BYE_LOGO_DATA_URI} alt="Bali Youth Evolution" className={className} />
   );

   export default ByeLogo;