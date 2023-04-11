import { NextPage } from "next";
import { Layout } from "../../layouts/default";
import Seo from "../../components/general/Seo";
import Hero from "../../components/post/Hero";
import CTA from "../../components/general/CTA";
import Main from "../../components/post/Main";
import Link from "next/link";

const Hypertension: NextPage = () => {
  const blogData = [
    {
      id: 1,
      header: `Causes of Hypertension`,
      body: (
        <div>
          <p className="my-3">
            Hypertension is broadly classified into two types based on the
            cause. When there is no identifiable disease condition that is
            causing the hypertension, it is classified as primary or essential
            hypertension. On the other hand, when an identifiable disease or
            physiological condition is responsible for the hypertension, it is
            classified as secondary hypertension.
          </p>
          <p className="my-3">
            In most persons with hypertension, there is no identifiable cause.
            This means most cases of hypertension are primary or essential
            hypertension. However, there are certain risk factors that increase
            the chances of a person developing the condition. These include:
          </p>
          <p className="my-3">
            <span className="font-bold">Family history:</span> A person whose
            family member, especially a nuclear family member, has hypertension,
            has a higher risk of developing the condition than one whose family
            members do not have. Notwithstanding, hypertension is not
            genetically acquired. A positive family history increases the
            chances but does not make it compulsory for a person to have
            hypertension.
          </p>
          <p className="my-3">
            <span className="font-bold">Obesity:</span> Persons whose body-mass
            index is higher than the normal range have a higher risk of
            developing hypertension than those with normal values.
          </p>
          <p className="my-3">
            <span className="font-bold">Smoking or alcohol consumption:</span>{" "}
            These are also found to increase a person’s chances of developing
            hypertension.
          </p>
          <p className="my-3">Causes of secondary hypertension include:</p>
          <p className="my-3">
            <span className="font-bold">Pregnancy:</span> Some persons develop
            hypertension for the first time in their lives when they become
            pregnant. They are persons who did not have the condition before the
            pregnancy. Usually, this pregnancy-induced hypertension resolves at
            the end of the pregnancy.
          </p>
          <p className="my-3">
            <span className="font-bold">Drugs:</span> Certain drugs used to
            treat some conditions are known to cause hypertension as one of
            their side effects. Usually, your doctor will educate you on any
            serious side effects of the drugs they are prescribing for you. If
            your hypertension is drug-induced, your doctor will consider
            withdrawing the responsible drug.
          </p>
          <p className="my-3">
            <span className="font-bold">Other Diseases:</span> Other conditions,
            especially hormonal abnormalities of the thyroid or adrenal glands,
            can also cause hypertension. Usually, treatment of the underlying
            condition resolves the hypertension as well. Also, some kidney
            diseases are known to cause hypertension.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      header: `Symptoms and Complications of Hypertension`,
      body: (
        <div>
          <p className="my-3">
            Hypertension is referred to as a silent killer because it often does
            not give any specific symptoms. This means that there are many
            persons who are not aware that they have the condition. However,
            when hypertension is left untreated for a long time, it causes
            damage to the person’s health. These complications include:{" "}
          </p>
          <p className="my-3">
            <span className="font-bold">Heart failure:</span> In hypertensive
            persons, the heart works against a much higher pressure than it does
            in normal individuals. With time, the heart can become tired and
            fail. Also, the heart muscle can become so enlarged that its own
            blood supply is no longer enough. When this happens, those parts of
            the muscle that lack sufficient blood begin to die, leading to a
            heart attack.
          </p>
          <p className="my-3">
            <span className="font-bold">Stroke:</span> Some blood vessels,
            especially those in the brain, cannot withstand a certain amount of
            pressure. In hypertensive individuals, these vessels can rupture or
            damage in other ways that prevent blood supply to some parts of the
            brain. When this happens, the person develops a stroke.
          </p>
          <p className="my-3">
            <span className="font-bold">Kidney disease:</span> Long-standing
            hypertension is also known to cause kidney conditions.
          </p>
          <p className="my-3">
            <span className="font-bold">Other complications:</span>{" "}
            Long-standing Other functions like eyesight and sexual function can
            also be affected by long-standing hypertension. Pregnancy-induced
            hypertension and another related condition, pre-eclampsia, are
            life-threatening both to the baby and the mother.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      header: `How to Control Hypertension`,
      body: (
        <div>
          <p className="my-3">
            Primary or essential hypertension has no cure. In secondary
            hypertension, treating the underlying condition usually resolves the
            hypertension as well.
          </p>
          <p className="my-3">
            A combination of lifestyle choices and medications is used to
            control the blood pressure in persons with hypertension. Lifestyle
            choices include reduction in table salt consumption, regular
            physical exercise, and avoidance of alcohol and tobacco.
          </p>
          <p className="my-3">
            Individuals with hypertension can live normal lives and long life
            spans if the condition is well controlled. All members of the
            population should develop the habit of checking their blood pressure
            routinely.
          </p>
          <p className="my-3">
            Do you have a family history of hypertension, currently taking
            antihypertensive medications or do you think you are at risk of
            developing hypertension in some ways?{" "}
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
      <Seo templateTitle="Full Read" />
      <Hero
        title="Key Things You Need to Know about the Silent Killer – Hypertension"
        datePosted="March 29, 2023"
        author="Dr Msonter Anzaa"
      />
      <Main
        blogImage="/img/blog/blog-post.png"
        summary={`A person is said to have hypertension when their blood pressure is
          higher than the normal range. The heart pumps blood round all parts of
          the body to supply them oxygen and nutrients, and to remove waste from
          where it is generated to where it is excreted from the body. The force
          with which the heart pumps blood generates a certain amount of
          pressure which pushes the blood throughout the body. However, when
          this pressure is higher than normal, it becomes a medical problem. Any
          blood pressure reading of greater than 140/90mmHg, is considered to be
          hypertensive.`}
        blogData={blogData}
      />
      <CTA />
    </Layout>
  );
};
export default Hypertension;
