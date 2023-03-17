import { FC } from "react";

const Main: FC = () => {
  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-5 lg:mt-10">
      <div className="border-2 p-6 mt-3 border-[#A9C5DE]">
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
          StableDoc Privacy Policy
        </h3>
        <p className="text-[#7889B2] text-base sm:text-lg lg:text-2xl mt-4">
          At StableDoc (“StableDoc”, “we”, “us”) your Privacy is top priority to
          us. This Privacy Policy explains what we do with the personal
          information we collect from you or about you when you access or use
          our website or app (together, the “Services”). If you do not agree
          with our policies and practices, please do not use the services or
          provide us your personal information.You may be using the Services as
          a recipient of health care clinical services from us. If so, the
          protected health information (PHI) that we collect about you in the
          context of providing those services is governed by applicable country
          health information privacy laws of the country you are accessing from,
          not this Policy.
        </p>
      </div>
      <div className="border-2 p-6 mt-10 border-[#A9C5DE]">
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
          Personal Information We Collect
        </h3>
        <div className="text-[#7889B2] text-base sm:text-lg lg:text-2xl">
          <p className="mt-4">
            As you use our website or the Services, certain information may be
            passively collected by cookies, navigational data like Uniform
            Resource Locators (URLs) and third parties. As used in this Policy,
            “personal information” is information that can be associated with or
            used to identify you. The personal information that we collect about
            you depends on how you interact with us. Personal information we
            collect via technology When you interact with our mobile app, web
            app or website, we collect your personal information if your device
            or internet browser setting permits us. Such personal information
            includes:
          </p>
          <ul className="list-disc ml-6 my-3">
            <li>IP Address Mobile</li>
            <li>operating system version (i.e. Apple iOS)</li>
            <li>
              Unique device identifiers like numbers or codes set by the device
              Settings and preferences
            </li>
            <li>
              Geolocation information - Certain features of the Site use GPS
              technology to collect real-time information about the location of
              your device so that the Site can connect you to a Healthcare
              Professional who is authorized to provide Services in the state
              where you are located. When accessing Google Maps services on our
              Site, you are agreeing to Google’s Terms of Service and Privacy
              Policy. You can turn this option off in your device setting.
            </li>
          </ul>
          <p className=""> Activity information such:</p>
          <ul className="list-disc ml-6 my-3">
            <li>Time spent browsing our content</li>
            <li>Dates and times you visited </li>
            <li>
              Information provided by cookies, web beacons and other internet
              technologies
            </li>
          </ul>
          <p>
            We may use both session cookies (which expire once you close your
            web browser) and persistent cookies to make the Site and Services
            easier to use, to make our advertising better, and to protect both
            you and StableDoc. You can instruct your browser, by changing its
            options, to stop accepting cookies or to prompt you before accepting
            a cookie from the websites you visit. If you do not accept cookies,
            however, you will not be able to stay logged in to the Site. We may
            also use Pixels to make the Site and Services easier to use and to
            make our advertising
          </p>
        </div>
      </div>
      <div className="border-2 p-6 mt-10 border-[#A9C5DE]">
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
          Chat And Video Consultation Technology
        </h3>
        <div className="text-[#7889B2] text-base sm:text-lg lg:text-2xl">
          <p className="mt-4">
            Our StableDoc platform contains chat and video consultation
            technology that enable our users to communicate with us live online
            for the purpose of consultation. Sometimes users can communicate
            with us without paying for our products and services. When you use
            our chat or video consultation technology, we may collect some or
            all of the following information: your email address, first name,
            last name, location, date of birth, phone number, health
            information, and any other information you willingly provide to us.
            You should only provide enough information to us that is necessary
            to answer our questions.
          </p>
        </div>
      </div>
      <div className="border-2 p-6 mt-10 border-[#A9C5DE]">
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
          Healthcare Services
        </h3>
        <div className="text-[#7889B2] text-base sm:text-lg lg:text-2xl">
          <p className="mt-4">
            All Health Professionals who deliver Services through StableDoc are
            medical professionals practicing within a group of corporately owned
            professional practices collectively known as “StableDoc
            Professionals”. Each healthcare professional is responsible for his
            or her services and compliance with the requirements applicable to
            his or her profession and license. Neither StableDoc nor any third
            parties who promote the Services or provide you with a link to the
            Services shall be liable for any professional advice you obtain from
            a Healthcare Professional via the Services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
