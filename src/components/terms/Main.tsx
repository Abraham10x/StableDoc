import { FC } from "react";

const Main: FC = () => {
  const Term1 = [
    {
      id: 1,
      header: `Corrections Of The Terms Of Use`,
      body: (
        <div>
          <p className="mt-5">
            There may be information on the Site that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Site at any time, without prior
            notice.
          </p>
          <p className="mt-5">
            Your continued use of the App following the posting of revised Terms
            of Use means that you accept and agree to the changes. Although we
            will use commercially reasonable efforts to notify you when these
            Terms of Use are materially updated, you are expected to check this
            page frequently so you are aware of any changes, as they are binding
            on you regardless of whether we have been able to provide other
            forms of notice to you.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      header: `Healthcare Services`,
      body: (
        <div>
          <p className="mt-5">
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
      ),
    },
    {
      id: 3,
      header: `Virtual Consultations`,
      body: (
        <div>
          <p>
            You acknowledge that a virtual consultation may not be the
            appropriate course of treatment for your particular healthcare
            needs. Medical services rendered by a Provider are subject to their
            professional judgment. Any information or advice received from a
            Provider comes from the individual Provider. You and your individual
            Provider are solely responsible for all information and/or
            communication sent during a virtual consultation or other Clinical
            Services communication. Virtual consultations with Providers are not
            intended to replace your relationship with your existing primary
            care physician and are not a substitute for regular use of your
            primary care physician if you need to. Virtual consultations cannot
            be used for any service that must be provided to you by your regular
            physician as an in-office follow up to an in-office visit, at no
            additional charge to you or your health care plan, as required by
            your health care plan.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      header: `Site Content`,
      body: (
        <div>
          <p>
            None of the Site content (other than information you receive from
            specific Healthcare Professionals) should be considered medical
            advice or an endorsement, representation or warranty that any
            particular medication or treatment is safe, appropriate, or
            effective for you.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      header: `User Accounts`,
      body: (
        <div>
          <p>
            When you register on the Site, you are required to create an account
            (“Account”) by entering your name, email address, password and
            certain other information collected by StableDoc (collectively
            “Account Information”). To create an Account, you must be of legal
            age to form a binding contract. If you are not of legal age to form
            a binding contract, you may not register to use our Services. You
            agree that the Account Information that you always provide to us,
            including during registration and in any information, you upload to
            the Site, will be true, accurate, current, and complete. You may not
            transfer or share your Account password with anyone or create more
            than one Account (except for sub accounts established for children
            of whom you are the parent or legal guardian). You are responsible
            for maintaining the confidentiality of your Account password and for
            all activities that occur under your Account. StableDoc reserves the
            right to take all action, as it deems necessary or reasonable,
            regarding the security of the Site and your Account Information. In
            no event and under no circumstances shall StableDoc be held liable
            to you for any liabilities or damages resulting from or arising out
            of your use of the Site, your use of the Account Information or your
            release of the Account Information to a third party. You may not use
            anyone else’s account at any time.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      header: `Medical Records`,
      body: (
        <div>
          <p>
            Any clinical information provided as part of a virtual consultation
            becomes part of your legal medical record. Virtual consultations are
            provided in real-time. Accordingly, no audio or video recordings are
            maintained or stored in your legal medical record. You agree to
            provide accurate information about yourself for your legal medical
            record. Use of your legal medical record by your Provider is
            governed by our Notice of Privacy Practices. It is your
            responsibility to confirm any third party information, or
            information regarding a minor child of whom you are a parent or
            legal guardian, in your medical record. Any prescriptions ordered by
            Providers are subject to state regulations and prescriptions may not
            be available in your country or region. In the event that a Provider
            does prescribe a medication, he/she will limit the supply based on
            state regulations and will only prescribe a medication, as
            determined appropriate in his/her sole discretion and professional
            judgment. There is no guarantee that a prescription will be written.
            Any prescriptions that you acquire from a Provider shall be solely
            for your personal use. You should fully and carefully read all
            provided product information and labels and contact a physician or
            pharmacist if you have any questions regarding any prescription that
            you acquire from a Provider.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      header: `Accessing The App And Account Security`,
      body: (
        <div>
          <p className="my-4">
            We reserve the right to withdraw or amend the StableDoc Mobile App,
            and any service or material we provide on the App, in our sole
            discretion without notice. We will not be liable if for any reason
            all or any part of the App is unavailable at any time or for any
            period. From time to time, we may restrict access to some parts of
            the App, or the entire App. We reserve the right to suspend,
            discontinue or deny your access to and use of the App for any lawful
            reason.
          </p>
          <p className="mt-5">
            You are responsible for making all arrangements necessary for you to
            have access to the App. We offer remote services using the internet,
            data networks, and devices which can access the internet and which
            can operate the App and our website (“Infrastructure”). We make the
            App and our website available for access using Infrastructure, but
            are not responsible for Infrastructure ourselves. The App operates
            only on Android-enabled phones running Android v5.0 or higher or
            iPhone version 5S or higher running IOS 11 or higher. StableDoc
            reserves the right to update the IOS and Android versions supported,
            and to discontinue supporting older versions of IOS or Android, at
            any time. The StableDoc Mobile App requires a consistent 4G or
            faster data connection and does not operate reliably on 3G, GPRS or
            EDGE connections. If you wish to use the App, you should ensure you
            have an internet-enabled device and a sufficient internet connection
            available. You acknowledge that technical or security threats or
            issues affecting the Infrastructure may require us to suspend our
            services in order to ensure they are secure and/or operating
            optimally.
          </p>
          <p className="mt-5">
            You are responsible for ensuring the security of the device you use
            to access the App. We strongly recommend that if you are using a
            wireless network to access the App, you avoid use of public wi-fi
            facilities in favor of a personal wi-fi connection, and that the
            wireless network is secured with at least WPA-2 security. We
            recommend that the device from which you access the App is password
            protected, set to lock after a short period of inactivity, and
            protected with suitable security features.
          </p>
          <p className="mt-5">
            You understand that the risk that ePHI contained in an email will be
            read by a third party, other than the intended recipient, cannot be
            eliminated. Reasonable measures will be used to protect the security
            and confidentiality of ePHI sent and received, including the use of
            encryption and other security technologies to the extent available.
            However, because of the risks outlined above, it is not possible to
            guarantee the security and confidentiality of email or push
            notifications. You understand that if you opt to send or receive
            ePHI via email or push notifications, we are not responsible for any
            unauthorized access to your health information that occurs during
            transmission. Moreover, we bear no responsibility for safeguarding
            the ePHI once it is transmitted to you.
          </p>
          <p className="mt-5">
            From time to time, updates to the App may be made available to you.
            We recommend that you use the latest version of the App at all
            times, to take advantage of the latest enhancements and important
            updates. Depending on the update, you may not be able to use the App
            until you have downloaded the latest version of the App and accepted
            any updated Terms of Use.
          </p>
          <p className="mt-5">
            To access the App or some of the resources it offers, you may be
            asked to provide certain registration details or other information.
            It is a condition of your use of the App that all the information
            you provide on the App is correct, current, and complete. We may
            contact you by telephone, mail or email to verify your StableDoc
            account information. We may request further information from you and
            you agree to provide such further information to ensure you have not
            fraudulently created your Account.
          </p>
          <p className="mt-5">
            If you choose, or are provided with, a user name, password, or any
            other piece of information as part of our security procedures, you
            must treat such information as confidential, and you must not
            disclose it to any other person or entity. You also acknowledge that
            your account is personal to you and agree not to provide any other
            person with access to this App or portions of it using your user
            name, password, or other security information. You agree to notify
            us promptly of any unauthorized access to or use of your user name
            or password or any other breach of security. You also agree to
            ensure that you exit from your account at the end of each session.
            You should use particular caution when accessing your account from a
            public or shared device so that others are not able to view or
            record your password or other personal information.
          </p>
          <p className="mt-5">
            We have the right to disable any user name, password, or other
            identifier, whether chosen by you or provided by us, at any time if,
            in our opinion, you have violated any provision of these Terms of
            Use.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      header: `Prohibited Uses`,
      body: (
        <div>
          <p>
            You may use the App only for lawful purposes and in accordance with
            these Terms of Use. You agree not to use the App:
          </p>
          <ul className="list-disc ml-6 my-4">
            <li>
              In any way that violates any applicable federal, state, or local
              law or regulation of the country where you are accessing our app
              from.
            </li>
            <li>
              On a device that has had its operating system compromised by the
              process of Jail breaking (Apple iOS) or Rooting (Android), which
              may result in the security of your personal data being
              compromised.
            </li>
            <li>
              For the purpose of exploiting, harming, or attempting to exploit
              or harm minors in any way by exposing them to inappropriate
              content, asking for personally identifiable information, or
              otherwise.
            </li>
            <li>
              To send, knowingly receive, upload, download, use, or re-use any
              material that does not comply with these Terms of Use.
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or
              promotional material, including any “junk mail,” “chain letter,”
              “spam,” or any other similar solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate another user or any other
              person or entity, or to access any other user’s account through
              the App.
            </li>
            <li>
              To impersonate or attempt to impersonate another user or any other
              person or entity, or to access any other user’s account through
              the App.
            </li>
          </ul>
          <p>More so, you agree nt</p>
          <ul className="list-disc ml-6 my-3">
            <li>
              Use the App in any manner that could disable, overburden, damage,
              or impair the site or interfere with any other party’s use of the
              App, including their ability to engage in real time activities
              through the App.
            </li>
            <li>
              Rse any robot, spider, or other automatic device, process, or
              means to access the App for any purpose, including monitoring or
              copying any of the material on the App.
            </li>
            <li>
              Use any manual process to monitor or copy any of the material on
              the App, or for any other purpose not expressly authorized in
              these Terms of Use, without our prior written consent.
            </li>
            <li>
              Use any device, software, or routine that interferes with the
              proper working of the App.
            </li>
            <li>
              Introduce any viruses, Trojan horses, worms, logic bombs, or other
              material that is malicious or technologically harmful.
            </li>
            <li>
              Attempt to gain unauthorized access to, interfere with, damage, or
              disrupt any parts of the App, the server on which the App is
              stored, or any server, computer, or database connected to the App.
            </li>
            <li>
              Attack the App via a denial-of-service attack or a distributed
              denial-of-service attack
            </li>
            <li>
              Otherwise attempt to interfere with the proper working of the App
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 8,
      header: `Indemnification`,
      body: (
        <div>
          <p>
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of: (1)
            your Contributions; (2) use of the Site; breach of these Terms of
            Use; (3) any breach of your representations and warranties set forth
            in these Terms of Use; (4) your violation of the rights of a third
            party, including but not limited to intellectual property rights;
            (5) or any overt harmful act toward any other user of the Site with
            whom you connected via the Site. Notwithstanding the foregoing, we
            reserve the right, at your expense, to assume the exclusive defence
            and control of any matter for which you are required to indemnify
            us, and you agree to cooperate, at your expense, with our defence of
            such claims. We will use reasonable efforts to notify you of any
            such claim, action, or proceeding which is subject to this
            indemnification upon becoming aware of it.
          </p>
        </div>
      ),
    },
    {
      id: 9,
      header: `Limitation On Time To File Claims`,
      body: (
        <div>
          <p>
            To The Greatest Extent Permitted By Applicable Law, Any Cause Of
            Action Or Claim You May Have Arising Out Of Or Relating To These
            Terms Of Use Or The App Must Be Commenced Within Twelve (12) Months
            After The Cause Of Action Accrues; Otherwise, Such Cause Of Action
            Or Claim Is Permanently Barred.
          </p>
        </div>
      ),
    },
    {
      id: 10,
      header: `Assignments Of Rights`,
      body: (
        <div>
          <p>
            The agreement for our services is between you and us, and no other
            party. There are no intended third party beneficiaries of this
            agreement. You may not assign or transfer your rights or obligations
            under these Terms of Use without our prior written consent. We may
            assign our rights and obligations under these terms to another
            organization, but this will not affect your rights under these Terms
            of Use.
          </p>
        </div>
      ),
    },
    {
      id: 11,
      header: `Entire Agreement`,
      body: (
        <div>
          <p>
            These Terms of Use constitute the sole and entire agreement between
            you and us regarding the App and the Clinical Services and supersede
            all prior and contemporaneous understandings, agreements,
            representations, and warranties, both written and oral, regarding
            the App and the Clinical Services.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-0 sm:mt-5 lg:mt-10">
      <div className="border-2 p-6 mt-3 border-[#A9C5DE]">
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
          StableDoc Terms & Conditions
        </h3>
        <p className="text-[#7889B2] text-base sm:text-lg lg:text-2xl mt-4">
          These Terms of Use constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (“you”) and
          StableDoc (“Company”, “we”, “us”, or “our”), concerning your access
          to, and use of the website, as well as any other media form, media
          channel, web application, mobile website or mobile application
          related, linked, or otherwise connected thereto (collectively, the
          “Site”). You agree that by accessing our site, you have read,
          understood, and agreed to be bound by all of these Terms of Use. IF
          YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
          EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE
          IMMEDIATELY.
        </p>
      </div>
      <div className="border-2 p-6 mt-10 border-[#A9C5DE]">
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
          Mobile Application Disclaimer
        </h3>
        <div className="text-[#7889B2] text-base sm:text-lg lg:text-2xl">
          <p className="mt-4">
            By downloading or using the StableDoc mobile application (“app”),
            these terms will automatically apply to you – you should make sure
            therefore that you read them carefully before using the app. You’re
            not allowed to copy, or modify the app, any part of the app, or our
            trademarks in any way. You’re not allowed to attempt to extract the
            source code of the app, and you also shouldn’t try to translate the
            app into other languages, or make derivative versions. The app
            itself, and all the trade marks, copyright, database rights and
            other intellectual property rights related to it, still belong to
            StableDoc.
          </p>
          <p> No Ambulance services for now </p>
          <p>
            While we plan to provide emergency/Ambulance services as captured in
            our roadmap, you cannot contact emergency services through our app
            for now. In the event of an emergency, or if you have a condition
            that you know will require a physical examination, or if you think
            you have a condition that requires urgent medical advice, diagnosis,
            or treatment, please dial your local emergency number or seek care
            from your local emergency room, urgent care, or other first
            responders immediately.
          </p>
          <p>
            The App is offered and available to users who meet all of the
            following conditions:
          </p>
          <ul className="list-disc ml-6 my-3">
            <li>
              Are 18 years of age or older or an emancipated minor depending on
              the country
            </li>
            <li>
              Reside in a country where use of our app is acceptable by law.
            </li>
          </ul>
          <p>
            By using this App, you represent and warrant that you are of legal
            age to form a binding contract with us and meet all of the foregoing
            eligibility requirements. If you do not meet all of these
            requirements, you must not download, access or use the StableDoc App
            and services.
          </p>
          <p>
            Clinical Services are offered by Company and available to patients
            who meet all of the following conditions:
          </p>
          <ul className="list-disc ml-6 my-3">
            <li>
              Are 18 years of age or older or an emancipated minor, or have
              Clinical Services requested by a parent or guardian.
            </li>
            <li>
              Are provided access to the Clinical Services by a health plan
              (“Sponsor”).
            </li>
            <li>
              Are physically located in a country where StableDoc and StableDoc
              partners are permitted by law to provide Clinical Services.
            </li>
          </ul>
          <p>
            By creating an account in the StableDoc App that includes access to
            Clinical Services, you are registering as a patient of Company. By
            using the Clinical Services, you represent and warrant that you are
            of legal age to form a binding contract and meet all of the
            foregoing eligibility requirements. If you do not meet all of these
            requirements, you must not access or use the Clinical Services. To
            permit you to access the Clinical Services on behalf of a minor
            child of whom you are a parent or legal guardian, you may be
            permitted to establish a subaccount under your name. Any such
            subaccount shall be subject to these Terms of Use.
          </p>
          <p>
            You hereby certify that you are physically located in one of the
            countries in which StableDoc and StableDoc Partners provide Clinical
            Services. You acknowledge that your ability to access and use the
            Clinical Services is conditioned upon the truthfulness of this
            certification and that the Providers you access are relying upon
            this certification in order to interact with you.
          </p>
          <p>
            You hereby certify that you are physically located in one of the
            countries in which StableDoc and StableDoc Partners provide Clinical
            Services. You acknowledge that your ability to access and use the
            Clinical Services is conditioned upon the truthfulness of this
            certification and that the Providers you access are relying upon
            this certification in order to interact with you.
          </p>
          <p>
            You acknowledge that it is your responsibility to enter your
            information into the App accurately and in English or other official
            language that we might update later in order to access our services.
            If you need to use the App in other languages, your mobile device
            needs to be set to that language (and, if it was not already set in
            that language, you need to re-start the App).
          </p>
        </div>
      </div>
      {Term1.map((data) => (
        <div key={data.id} className="border-2 p-6 mt-10 border-[#A9C5DE]">
          <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl bg-gradient-600 bg-clip-text text-transparent-active">
            {data.header}
          </h3>
          <div className="text-[#7889B2] text-base sm:text-lg lg:text-2xl">
            <p className="mt-4">{data.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
