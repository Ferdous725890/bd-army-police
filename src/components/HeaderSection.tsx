import HeroBtn from "./HeroBtn";

const HeaderSection = () => {
  return (
    <header>
      {/* title and desc */}
      <div className="text-center mb-5 pb-4 border-b-2 border-b-green">
        <h1 className="text-green my-3 mt-3 text-[2em] font-semibold">বাংলাদেশে সেনাবাহিনীর ক্যাম্প লোকেশন</h1>
        <p>বর্তমান অন্তর্বর্তী সরকারের অধীনে সেনাবাহিনীর ক্যাম্পসমূহের লোকেশন এবং যোগাযোগের নম্বর</p>
      </div>

      {/* button container */}
      <div className="relative flex flex-col gap-4 mb-5">
        {/* btn and suggestion */}
        <HeroBtn />
      </div>
    </header>
  );
};

export default HeaderSection;
