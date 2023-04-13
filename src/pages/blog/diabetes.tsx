import { NextPage } from "next";
import { Layout } from "../../layouts/default";
import Seo from "../../components/general/Seo";
import CTA from "../../components/general/CTA";
import Hero from "../../components/post/Hero";
import Main from "../../components/post/Main";
import Link from "next/link";

const Diabetes: NextPage = () => {
  const blogData = [
    {
      id: 1,
      header: `Types of Diabetes`,
      body: (
        <div>
          <p className="my-3">
            Diabetes is classified in a number of ways depending on how the
            condition happens. Usually, when a person eats carbohydrates, the
            food is broken down into simple molecules for the body to absorb
            into the blood. These molecules are called sugar, although they are
            not all in the form of the table sugar sold in the market. The body
            produces a hormone called insulin that converts the excess sugar in
            the blood to glycogen which is stored in the liver and muscles. This
            conversion is hindered in people with diabetes, either because
            insulin is totally unavailable or not available in required
            quantities.
          </p>
          <p className="my-3">
            <span className="font-bold">Type 1 Diabetes:</span> This was also
            referred to as insulin-dependent diabetes mellitus. It results from
            absolute lack of insulin. It is an auto-immune condition in which
            the body produces antibodies that attack and destroy the cells of
            the pancreas that produce insulin. As a result, insulin is not
            produced and excess blood sugar cannot be converted and stored,
            hence the blood sugar remains high. It was considered
            insulin-dependent because medical treatment was to give the patient
            external insulin.
          </p>
          <p className="my-3">
            <span className="font-bold">Type 2 Diabetes:</span> This was also
            known as non-insulin-dependent diabetes mellitus. In this case,
            unlike type 1, the person produces insulin from the cells of the
            pancreas. However, this insulin is not enough or, for other reasons,
            is not able to effectively convert excess blood sugar. This is
            usually the case in people who are obese in whom it is believed that
            excess fat dampen insulin receptors and make the receptors respond
            poorly to the insulin in circulation.
          </p>
          <p className="my-2">
            Medical treatment for this uses drugs that increase insulin
            secretion. It also uses insulin from an external source to augment
            what the body is already producing.
          </p>
          <p className="my-2">
            There are other types of diabetes such as the one associated with
            pregnancy in which a previously non-diabetic woman becomes diabetic
            in the course of a pregnancy.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      header: `Causes of Diabetes`,
      body: (
        <div>
          <p className="my-3">
            Although what happens in the body of a person with diabetes is
            known, why it happens is not as clear. However, risk factors exist,
            which make one person more likely to have the condition than another
            person.
          </p>
          <p className="my-3">
            <span className="font-bold">Family history:</span> People who have
            family members, especially those of the nuclear family, with
            diabetes have a higher chance of developing the condition. This is a
            relative risk and does not mean all people with family history must
            develop the condition themselves.
          </p>
          <p className="my-3">
            <span className="font-bold">Obesity:</span> It has also been found
            that obese persons have a higher risk of developing diabetes than
            non-obese individuals.
          </p>
          <p className="my-3">
            <span className="font-bold">Sedentary living:</span> Also, persons
            who live sedentary lifestyles stand a higher risk of coming down
            with diabetes than those who live more active lives.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      header: `Symptoms of Diabetes`,
      body: (
        <div>
          <p className="my-3">
            Persons with diabetes may notice all or some of the following
            symptoms:
          </p>
          <p className="my-3">
            <span className="font-bold">Polyuria:</span> This refers to passing
            very large volumes of urine at a frequency greater than usual.
            Usually, the person notices that they wake up to urinate multiple
            times in the course of each night.
          </p>
          <p className="my-3">
            <span className="font-bold">Polydypsia:</span> This refers to
            unusual thirst.
          </p>
          <p className="my-3">
            <span className="font-bold">Polyphagia:</span> This refers to
            unusual hunger.
          </p>
          <p className="my-3">
            <span className="font-bold">Weight loss:</span> Persons with
            diabetes may notice that despite unusual hunger and frequent eating,
            they are losing weight unintentionally.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      header: `Complications`,
      body: (
        <div>
          <p className="my-3">
            Diabetes has a number of complications which result when the blood
            sugar is not well-controlled over a long time. These complications
            affect the eyes, kidneys, nervous system, sexual function, and so
            on.
          </p>
          <p className="my-3">
            High blood glucose levels can also result in diabetic emergencies
            which, if not promptly controlled, can result in death.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      header: `Management and Control`,
      body: (
        <div>
          <p className="my-3">
            Dietary modification is the commonest non-pharmacological method of
            controlling diabetes. Known diabetics or those at high risk of
            developing the condition can control it by avoiding or reducing,
            unhealthier sources of carbohydrates such as pastries, sodas and
            other highly processed or refined foods. Those who are obese can
            also improve their situation by living more active lives and
            reducing their weight.
          </p>
          <p className="my-3">
            There are also drugs available to help with long-term control of
            diabetes, but they do not cure the condition.
          </p>
          <p className="my-3">
            Do you have a family history of diabetes, currently taking
            antidiabetic medications or do you think you are at risk of
            developing diabetes in some ways?{" "}
            <Link legacyBehavior href="https://patient.stabledoc.com/auth">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-primary cursor-pointer"
              >
                Click here
              </a>
            </Link>{" "}
            to talk to a doctor today.
          </p>
        </div>
      ),
    },
  ];
  return (
    <Layout>
      <Seo templateTitle="Simple Facts You Must Know about Diabetes" />
      <Hero
        title="Simple Facts You Must Know about Diabetes"
        datePosted="March 27, 2023"
        author="Dr Msonter Anzaa"
      />
      <Main
        blogImage="/img/blog-images/diabeties.png"
        summary={`Diabetes mellitus is the medical name for what is commonly known as
          sugar disease. Medically, it is diagnosed when a person has a blood
          sugar greater than the normal level. Blood sugar comes from a number
          of sources, but the body of a healthy person has mechanisms to control
          the sugar and keep it within the normal range. When the body loses
          this control, and the blood sugar becomes higher than the normal
          range, the person is said to have diabetes mellitus.`}
        blogData={blogData}
      />
      <CTA />
    </Layout>
  );
};
export default Diabetes;
